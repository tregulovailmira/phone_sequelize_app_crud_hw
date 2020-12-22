const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json({ type: 'application/vnd.api+json' }));

app.use('/api', router);

app.use((error, req, res, next) => {
  if (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = app;
