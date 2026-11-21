import test from 'node:test';
import assert from 'node:assert/strict';
import { parseWeight, dailyGrams, bagDays, ration, MAX_KG } from '../site/js/ration.js';

test('parseWeight acepta coma y punto', () => {
  assert.equal(parseWeight('12'), 12);
  assert.equal(parseWeight('4,5'), 4.5);
  assert.equal(parseWeight(' 4.5 '), 4.5);
});

test('parseWeight rechaza lo que no es un peso razonable', () => {
  for (const bad of ['', null, undefined, 'abc', '-3', '0', '0,2', String(MAX_KG + 1), '1e3', '4,5,1', 'NaN', 'Infinity']) {
    assert.equal(parseWeight(bad), null, String(bad));
  }
});

test('dailyGrams redondea a múltiplos de 5 y respeta la etapa', () => {
  assert.equal(dailyGrams('perro', 'adulto', 10), 200);
  assert.equal(dailyGrams('gato', 'adulto', 4), 60);
  assert.ok(dailyGrams('perro', 'cachorro', 5) > dailyGrams('perro', 'adulto', 5));
  assert.ok(dailyGrams('perro', 'senior', 10) < dailyGrams('perro', 'adulto', 10));
});

test('dailyGrams devuelve null con datos inválidos', () => {
  assert.equal(dailyGrams('loro', 'adulto', 3), null);
  assert.equal(dailyGrams('perro', 'viejo', 3), null);
  assert.equal(dailyGrams('perro', 'adulto', 0), null);
  assert.equal(dailyGrams('perro', 'adulto', NaN), null);
});

test('un animal muy chico nunca da 0 g', () => {
  assert.ok(dailyGrams('gato', 'senior', 0.5) >= 5);
});

test('bagDays nunca es 0 ni divide por cero', () => {
  assert.equal(bagDays(15, 200), 75);
  assert.equal(bagDays(3, 5000), 1);
  assert.equal(bagDays(3, 0), 0);
});

test('ration valida cada dato y arma el resultado', () => {
  assert.equal(ration({ animal: '', stage: 'adulto', weight: '10' }).ok, false);
  assert.equal(ration({ animal: 'perro', stage: '', weight: '10' }).ok, false);
  assert.equal(ration({ animal: 'perro', stage: 'adulto', weight: 'mucho' }).ok, false);
  const r = ration({ animal: 'perro', stage: 'adulto', weight: '10' });
  assert.equal(r.ok, true);
  assert.equal(r.grams, 200);
  assert.deepEqual(r.bags.map((b) => b.kg), [3, 15]);
  assert.deepEqual(r.bags.map((b) => b.days), [15, 75]);
});
