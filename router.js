const { Router } = require('express');
const { cpuRouter, phoneRouter } = require('./routers');

const router = Router();

router.use('/cpus', cpuRouter);

router.use('/phones', phoneRouter);

module.exports = router;
