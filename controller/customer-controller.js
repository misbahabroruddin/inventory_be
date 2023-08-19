const { Customer } = require('../models');
const port = 5000;

const getAllCustomer = async (req, res) => {
  try {
    const data = await Customer.findAll();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomerId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Customer.findByPk(id);

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

const createCustomer = async (req, res) => {
  try {
    const { nama, contact, email, alamat, diskon, tipe_diskon } = req.body;
    let dataCustomer = {
      nama,
      contact,
      email,
      alamat,
      diskon,
      tipe_diskon,
    };

    if (req.file) {
      const imagePath = `http://localhost:${port}/${req.file.path}`;
      dataCustomer = {
        ...dataCustomer,
        ktp: imagePath,
      };
    }

    const data = await Customer.create(dataCustomer);

    res.status(201).json({
      message: 'CREATED',
      id: data.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, contact, email, alamat, diskon, tipe_diskon } = req.body;
    let updatedData = {
      nama,
      contact,
      email,
      alamat,
      diskon,
      tipe_diskon,
    };

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(400).json({
        message: 'NOT FOUND',
      });
    }

    if (req.file) {
      const imagePath = `http://localhost:${port}/${req.file.path}`;
      updatedData = {
        ...updatedData,
        ktp: imagePath,
      };
    }

    await Customer.update(updatedData, {
      where: { id },
    });

    res.status(200).json({
      message: 'UPDATED',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(400).json({
        message: 'NOT FOUND',
      });
    }

    await Customer.destroy({
      where: { id },
    });

    res.status(200).json({ message: 'DELETED' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCustomer,
  getCustomerId,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
