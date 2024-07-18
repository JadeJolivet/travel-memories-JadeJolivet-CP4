const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const travelJournalsRouter = require("./travelJournals/router");

router.use("travelJournals", travelJournalsRouter);

/* ************************************************************************* */

module.exports = router;
