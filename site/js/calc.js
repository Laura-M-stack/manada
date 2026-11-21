import { ration } from './ration.js';

const $ = (id) => document.getElementById(id);
const fmtKg = (n) => String(n).replace('.', ',');

const form = $('calc-form');
const out = $('calc-out');
const msg = $('calc-msg');
const weight = $('calc-weight');

function checked(name) {
  return form.querySelector(`input[name="${name}"]:checked`)?.value;
}

function show(result) {
  if (!result.ok) {
    out.hidden = true;
    msg.textContent = result.error;
    msg.classList.add('is-error');
    weight.setAttribute('aria-invalid', 'true');
    return;
  }
  weight.removeAttribute('aria-invalid');
  msg.textContent = '';
  msg.classList.remove('is-error');
  $('calc-grams').textContent = `${result.grams} g por día`;
  $('calc-bags').replaceChildren(...result.bags.map((b) => {
    const li = document.createElement('li');
    li.textContent = `Una bolsa de ${fmtKg(b.kg)} kg te dura unos ${b.days} días.`;
    return li;
  }));
  out.hidden = false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  show(ration({ animal: checked('animal'), stage: checked('stage'), weight: weight.value }));
});
// Si cambia cualquier dato, el resultado anterior deja de ser válido.
form.addEventListener('input', () => { out.hidden = true; });
