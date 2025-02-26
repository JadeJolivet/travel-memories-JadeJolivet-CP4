const AbstractRepository = require("./AbstractRepository");

class TravelJournalRepository extends AbstractRepository {
  constructor() {
    super({ table: "travelJournal" });
  }

  // The C of CRUD - Create operation
  async create(travelJournal) {

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (user_id, title, cover_image, theme, qr_code)
                VALUES (?, ?, ?, ?, ?)`,
      [
        travelJournal.user_id,
        travelJournal.title,
        travelJournal.cover_image,
        travelJournal.theme,
        travelJournal.qr_code,
      ]
    );
    return result.insertId;
  }
  // Execute the SQL INSERT query to add a new item to the "item" table
  // Return the ID of the newly inserted item
  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
  // Execute the SQL UPDATE query to update a specific program
  // Return how many rows were affected
  // The D of CRUD - Delete operation
  // Execute the SQL DELETE query to delete a specific program
  // Return how many rows were affected
}
module.exports = TravelJournalRepository;
