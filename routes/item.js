const express = require('express');
const router = express();
const uploadMiddleware = require('../middleware/uploadPhoto');
const {
  getAllItems,
  createItem,
  getItemId,
  updateItem,
  deleteItem,
} = require('../controller/item-controller');

router.get('/items', getAllItems);
router.post('/items', uploadMiddleware.single('barang'), createItem);
router.get('/items/:id', getItemId);
router.put('/items/:id', uploadMiddleware.single('barang'), updateItem);
router.delete('/items/:id', deleteItem);

module.exports = router;
