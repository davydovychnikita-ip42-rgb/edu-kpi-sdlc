const BaseRepository = require('../../shared/base/BaseRepository');

class CatalogRepository extends BaseRepository {
  constructor(db) {
    super(db, 'products');
  }
}

module.exports = CatalogRepository;