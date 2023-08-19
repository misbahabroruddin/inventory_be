const { Item } = require('../models');
const port = 5000;

const getAllItems = async (req, res) => {
  try {
    const data = await Item.findAll();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createItem = async (req, res) => {
  try {
    const { nama_item, unit, stok, harga_satuan } = req.body;

    let dataItem = {
      nama_item,
      unit,
      stok,
      harga_satuan,
    };

    if (req.file) {
      const imagePath = `http://localhost:${port}/${req.file.path}`;
      dataItem = {
        ...dataItem,
        barang: imagePath,
      };
    }

    const data = await Item.create(dataItem);

    res.status(201).json({
      message: 'CREATED',
      id: data.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItemId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Item.findByPk(id);
    if (!data) {
      return res.status(404).json({
        message: 'NOT FOUND',
      });
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama_item, unit, stok, harga_satuan } = req.body;
    let updatedData = {
      nama_item,
      unit,
      stok,
      harga_satuan,
    };

    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({
        message: 'NOT FOUND',
      });
    }

    if (req.file) {
      const imagePath = `http://localhost:${port}/${req.file.path}`;
      updatedData = {
        ...updatedData,
        barang: imagePath,
      };
    }

    await Item.update(updatedData, { where: { id } });

    res.status(200).json({
      message: 'UPDATED',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({
        message: 'NOT FOUND',
      });
    }
    await Item.destroy({
      where: { id },
    });
    res.status(200).json({ message: 'DELETED' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllItems,
  createItem,
  getItemId,
  updateItem,
  deleteItem,
};
