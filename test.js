const assert = require('node:assert');
const test = require('node:test');

test('Prueba intencionalmente fallida para CI/CD', () => {
  // Forzamos un fallo de aserción
  assert.strictEqual(1, 2, "La prueba falló intencionalmente");
});