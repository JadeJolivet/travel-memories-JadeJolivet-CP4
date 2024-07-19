// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const travelJournals = await tables.travelJournal.readAll();
    // Respond with the items in JSON format
    res.json(travelJournals);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const travelJournal = await tables.travelJournal.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (travelJournal == null) {
      res.sendStatus(404);
    } else {
      res.json(travelJournal);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const travelJournal = { ...req.body, id: req.params.id };
  try {
    await tables.travelJournal.update(travelJournal);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const travelJournal = req.body;
  try {
    const insertId = await tables.travelJournal.create(travelJournal);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res) => {
  try {
    await tables.travelJournal.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
