'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sale.init(
    {
      // code_transaksi: DataTypes.INTEGER,
      tanggal_transaksi: DataTypes.DATE,
      customer: DataTypes.INTEGER,
      total_bayar: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Sale',
    }
  );
  return Sale;
};
