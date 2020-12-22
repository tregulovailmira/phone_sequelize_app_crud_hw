const { Phone, Cpu } = require('../models');
const _ = require('lodash');

module.exports.createPhone = async (req, res, next) => {
  const {
    body,
    body: { cpuId },
  } = req;

  try {
    const createdPhone = await Phone.create(body);
    const foundedCpu = await Cpu.findByPk(cpuId);

    await createdPhone.setCpu(foundedCpu);

    const preparedPhone = _.omit(createdPhone.get(), [
      'id',
      'createdAt',
      'updatedAt',
    ]);

    res.status(201).send({
      data: preparedPhone,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhone = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const foundPhone = await Phone.findByPk(phoneId, {
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
    });

    foundPhone
      ? res.status(200).send({
          data: foundPhone.get(),
        })
      : res.status(404).send('Phone not found');
  } catch (error) {
    next(error);
  }
};

module.exports.getAllPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.findAll({
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
    });

    foundPhones
      ? res.status(200).send({ data: foundPhones })
      : res.status(404).send('Phones not found');
  } catch (error) {
    next(error);
  }
};

module.exports.updatePhone = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const foundPhone = await Phone.findByPk(phoneId);

    if (foundPhone) {
      const updatedPhone = await foundPhone.update(body);
      const preparedPhone = _.omit(updatedPhone.get(), [
        'id',
        'createdAt',
        'updatedAt',
      ]);
      return res.status(200).send({ data: preparedPhone });
    }
    res.status(404).send('Phones not found');
  } catch (error) {
    next(error);
  }
};

module.exports.deletePhone = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const foundPhone = await Phone.findByPk(phoneId);
    if (foundPhone) {
      await foundPhone.destroy(body);
      return res.status(204);
    }
    res.status(404).send('Phone not found');
  } catch (error) {
    next(error);
  }
};
