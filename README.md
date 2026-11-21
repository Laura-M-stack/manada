# Manada

Demo de una tienda de mascotas. Es un proyecto ficticio de portfolio: no procesa pagos.

**Demo:** https://laura-m-stack.github.io/manada/

## Qué muestra

- Diseño Material con superficies tonales: azul cobalto, tipografía Plus Jakarta Sans, formas redondeadas y modo oscuro automático.
- Catálogo con fotos reales, filtros por animal y categoría, búsqueda sin distinguir acentos y orden por precio o nombre.
- Variantes con precio y stock propios (por ejemplo 3 kg y 15 kg de alimento) y suscripción mensual con 10% de descuento, que se muestra como ahorro en el carrito.
- Carrito en un panel lateral (`<dialog>`) con cantidades limitadas por stock, envío gratis desde $ 60.000 con barra de progreso y cuotas.
- Cálculo de envío por código postal (valores de ejemplo por zona).
- Contenido propio de un pet shop: calculadora de ración diaria y de duración de la bolsa (`site/js/ration.js`, con pruebas), consejos en acordeones nativos y ficha de ingredientes o materiales en cada producto.
- Carrito guardado en `localStorage`; al leerlo se descarta lo que ya no existe, no tiene stock o está duplicado.
- Accesibilidad: foco visible, foco devuelto al cerrar los paneles, botones con nombre accesible, `prefers-reduced-motion`, áreas táctiles de 44 px.

## Tecnología

HTML, CSS y JavaScript sin dependencias ni build. La lógica de la tienda está separada del DOM en `site/js/cart.js` y se prueba con el runner nativo de Node.

## Uso

```powershell
npm test      # pruebas de la lógica de la tienda
npm start     # servidor local en http://localhost:4173
```

Requiere Node 20 o superior. El sitio publicado es el contenido de `site/`.

## Estructura

```
site/                sitio estático (index.html, css, js)
site/js/cart.js      lógica pura: variantes, stock, suscripción, envío, filtros
site/js/products.js  catálogo de ejemplo
tests/               pruebas con node:test
scripts/serve.mjs    servidor local mínimo
```

## Créditos

Fotos: [Unsplash](https://unsplash.com). Precios y stock son datos de ejemplo.
