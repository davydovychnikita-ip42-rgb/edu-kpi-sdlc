class BaseRepository {
  constructor(db, tableName) {
    this.db = db;
    this.tableName = tableName;
  }

  async findById(id) {
    const query = `SELECT * FROM ${this.tableName} WHERE id = $1`;
    const { rows } = await this.db.query(query, [id]);
    return rows[0] || null;
  }

  async deleteById(id) {
    const query = `DELETE FROM ${this.tableName} WHERE id = $1 RETURNING *`;
    const { rows } = await this.db.query(query, [id]);
    return rows[0] || null;
  }
}

module.exports = BaseRepository;