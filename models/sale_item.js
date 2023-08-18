'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sale_Item.init({
    code_transaksi: DataTypes.INTEGER,
    item: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total_diskon: DataTypes.INTEGER,
    total_harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sale_Item',
  });
  return Sale_Item;
};