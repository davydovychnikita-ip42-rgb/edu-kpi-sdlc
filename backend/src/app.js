const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');

const authRoutes = require('./modules/auth/auth.routes');
const catalogRoutes = require('./modules/catalog/catalog.routes');
const cartRoutes = require('./modules/cart/cart.routes');
const ordersRoutes = require('./modules/orders/orders.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.status(200).json({
      status: 'OK',
      service: 'Sviy do Svogo Modular Monolith',
      dbTime: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({ status: 'ERROR', message: error.message });
  }
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', catalogRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/orders', ordersRoutes);

app.use(errorHandler);

module.exports = app;