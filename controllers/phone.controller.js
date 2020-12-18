const { Phone, Cpu } = require('../models');

module.exports.createPhone = async (req, res, next) => {
  const {
    body,
    params: { cpuId },
  } = req;

  try {
    const foundedCpu = await Cpu.findByPk(cpuId);

    if (foundedCpu) {
      const createdPhone = await Phone.create(body);
      return res
        .status(201)
        .send({ data: await createdPhone.setCpu(foundedCpu) });
    }
    return res.status(404).send('CPU not found');
  } catch (error) {
    next(error);
  }
};

module.exports.getAllPhonesWithCpu = async (req, res, next) => {
  const {
    params: { cpuId },
  } = req;

  try {
    const foundedCpu = await Cpu.findByPk(cpuId);
    if (foundedCpu) {
      const foundedPhones = await foundedCpu.getPhones({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
      });
      return res.status(200).send({ data: foundedPhones });
    }
    res.status(404).send('CPU not found');
  } catch (error) {
    next(error);
  }
};
