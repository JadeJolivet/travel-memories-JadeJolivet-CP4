const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const journalEntry = await tables.journalEntry.readAll();

    res.status(200).json(journalEntry);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const journalEntry = await tables.journalEntry.read(req.params.id);

    if (journalEntry == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(journalEntry);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const journalEntry = { ...req.body, id: req.params.id };
  try {
    await tables.user.update(journalEntry);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const journalEntry = req.body;
  try {
    const insertId = await tables.journalEntry.create(journalEntry);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res) => {
  try {
    await tables.journalEntry.delete(req.params.id);

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
