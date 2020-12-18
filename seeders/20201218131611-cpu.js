'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cpus', [
      {
        name: 'MediaTek Helio X30',
        number_of_cores: 10,
        frequency_mhz: 2600,
        instruction_set: 'ARMv8-A',
        technical_process_nm: 10,
        tdp_wt: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Samsung Exynos 9820',
        number_of_cores: 8,
        frequency_mhz: 2700,
        instruction_set: 'ARMv8.2-A',
        technical_process_nm: 8,
        tdp_wt: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'MediaTek Helio G90T',
        number_of_cores: 8,
        frequency_mhz: 2050,
        instruction_set: 'ARMv8.2-A',
        technical_process_nm: 12,
        tdp_wt: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Qualcomm Snapdragon 855 Plus',
        number_of_cores: 8,
        frequency_mhz: 2960,
        instruction_set: 'ARMv8.1-A',
        technical_process_nm: 7,
        tdp_wt: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
