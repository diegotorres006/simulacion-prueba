const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Aplicación base funcionando correctamente' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}

module.exports = app;
