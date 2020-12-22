const { Router } = require('express');
const { phoneController } = require('../controllers');

const phoneRouter = Router();

phoneRouter
  .route('/:phoneId')
  .get(phoneController.getPhone)
  .patch(phoneController.updatePhone)
  .delete(phoneController.deletePhone);

phoneRouter
  .route('/')
  .post(phoneController.createPhone)
  .get(phoneController.getAllPhones);

module.exports = phoneRouter;
