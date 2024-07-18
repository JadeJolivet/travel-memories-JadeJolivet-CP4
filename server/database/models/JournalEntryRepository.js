const AbstractRepository = require("./AbstractRepository");

class JournalEntryRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    super({ table: "journalEntry" });
  }

  // The C of CRUD - Create operation

  async create(journalEntry) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
        journal_id,
        image,
        description,
        location,
        ) values (?, ?, ?, ?)`,
      [
        journalEntry.journal_id,
        journalEntry.image,
        journalEntry.description,
        journalEntry.location,
      ]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `SELECT id, journal_id, image, description, location FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all programs from the "user" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of users
    return rows;
  }

  // Return the first row of the result, which represents the user

  // The U of CRUD - Update operation

  async update(journalEntry) {
    // Execute the SQL UPDATE query to update a specific user
    const [result] = await this.database.query(
      `UPDATE ${this.table} 
      SET 
        journal_id = ?,
        image = ?,
        description = ?,
        location = ?`,
      [
        journalEntry.journal_id,
        journalEntry.image,
        journalEntry.description,
        journalEntry.location,
      ]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific user
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = JournalEntryRepository;
