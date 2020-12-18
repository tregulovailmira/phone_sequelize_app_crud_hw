const { Router } = require('express');
const cpuRouter = require('./routers/cpuRouter');

const router = Router();

router.use('/cpus', cpuRouter);

module.exports = router;
