const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
} = require("../../../controllers/travelJournal");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item

// router.put("/:id", edit);

// // Route to add a new item
// router.post("", add);

/* ************************************************************************* */

module.exports = router;
