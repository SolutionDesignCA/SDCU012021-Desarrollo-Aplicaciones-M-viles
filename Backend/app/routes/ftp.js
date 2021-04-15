const express = require("express");
const { testFtp } = require("../controllers/ftp");
const router = express.Router();

router.get("/ftp", testFtp);

module.exports = {
  router,
};
