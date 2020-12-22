const { Router } = require('express');
const { cpuController } = require('../controllers');

const cpuRouter = Router();

cpuRouter
  .route('/:cpuId/phones')
  .post(cpuController.createPhoneWithCpu)
  .get(cpuController.getAllPhonesWithCpu);

module.exports = cpuRouter;
