const BaseRepository = require('../../shared/base/BaseRepository');

class OrdersRepository extends BaseRepository {
  constructor(db) {
    super(db, 'orders');
  }
}

module.exports = OrdersRepository;