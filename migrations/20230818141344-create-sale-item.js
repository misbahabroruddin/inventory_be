'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sale_Items', {
      code_transaksi: {
        references: {
          model: 'Sales',
          key: 'code_transaksi',
        },
        type: Sequelize.INTEGER,
      },
      item: {
        references: {
          model: 'Items',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      qty: {
        type: Sequelize.INTEGER,
      },
      total_diskon: {
        type: Sequelize.INTEGER,
      },
      total_harga: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sale_Items');
  },
};
