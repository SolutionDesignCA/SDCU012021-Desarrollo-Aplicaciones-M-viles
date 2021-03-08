const express = require("express");

const { getUsuarios } = require("../controllers/usuarios");

const router = express.Router();

router.get("/usuarios", getUsuarios);

module.exports = {
  router,
};
