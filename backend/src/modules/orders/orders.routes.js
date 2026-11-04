const express = require('express');
const db = require('../../config/db');
const OrdersRepository = require('./orders.repository');
const OrdersService = require('./orders.service');
const OrdersController = require('./orders.controller');

const router = express.Router();

const ordersRepository = new OrdersRepository(db);
const ordersService = new OrdersService(ordersRepository);
const ordersController = new OrdersController(ordersService);

module.exports = router;