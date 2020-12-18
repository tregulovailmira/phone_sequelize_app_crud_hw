const { Router } = require('express');
const { phoneController } = require('../controllers');

const cpuRouter = Router();

//api/cpus/

cpuRouter
  .route('/:cpuId/phones')
  .post(phoneController.createPhone)
  .get(phoneController.getAllPhonesWithCpu);

module.exports = cpuRouter;
