// Calculadora de ración: lógica pura, sin DOM. Los valores son orientativos
// (porcentaje del peso corporal en alimento seco por día).
export const RATES = {
  perro: { cachorro: 0.04, adulto: 0.02, senior: 0.018 },
  gato: { cachorro: 0.03, adulto: 0.015, senior: 0.014 },
};
export const BAGS_KG = { perro: [3, 15], gato: [1.5, 7.5] };
export const MIN_KG = 0.5;
export const MAX_KG = 90;

// Acepta "12", "12,5" y "12.5". Devuelve null si no es un número usable.
export function parseWeight(raw) {
  const text = String(raw ?? '').trim().replace(',', '.');
  if (!/^\d+(\.\d+)?$/.test(text)) return null;
  const kg = Number(text);
  return Number.isFinite(kg) && kg >= MIN_KG && kg <= MAX_KG ? kg : null;
}

export function dailyGrams(animal, stage, kg) {
  const rate = RATES[animal]?.[stage];
  if (!rate || !Number.isFinite(kg) || kg <= 0) return null;
  return Math.max(5, Math.round((kg * 1000 * rate) / 5) * 5);
}

export const bagDays = (bagKg, grams) => (grams > 0 ? Math.max(1, Math.floor((bagKg * 1000) / grams)) : 0);

export function ration({ animal, stage, weight }) {
  if (!RATES[animal]) return { ok: false, error: 'Elegí si es perro o gato.' };
  if (!RATES[animal][stage]) return { ok: false, error: 'Elegí la etapa.' };
  const kg = parseWeight(weight);
  if (kg == null) return { ok: false, error: `Ingresá un peso entre ${MIN_KG} y ${MAX_KG} kg, por ejemplo 12 o 4,5.` };
  const grams = dailyGrams(animal, stage, kg);
  return { ok: true, kg, grams, bags: BAGS_KG[animal].map((bag) => ({ kg: bag, days: bagDays(bag, grams) })) };
}
