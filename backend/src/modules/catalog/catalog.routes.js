const express = require('express');
const db = require('../../config/db');
const CatalogRepository = require('./catalog.repository');
const CatalogService = require('./catalog.service');
const CatalogController = require('./catalog.controller');

const router = express.Router();

const catalogRepository = new CatalogRepository(db);
const catalogService = new CatalogService(catalogRepository);
const catalogController = new CatalogController(catalogService);

router.get('/categories', async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM categories ORDER BY name ASC');
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;