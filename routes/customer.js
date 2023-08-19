const express = require('express');
const router = express();
const uploadMiddleware = require('../middleware/uploadPhoto');
const {
  getAllCustomer,
  getCustomerId,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controller/customer-controller');

router.get('/customers', getAllCustomer);
router.get('/customers/:id', getCustomerId);
router.post('/customers', uploadMiddleware.single(), createCustomer);
router.put('/customers/:id', uploadMiddleware.single(), updateCustomer);
router.delete('/customers/:id', deleteCustomer);

module.exports = router;
