const express = require("express");
const {
  getUsuarios,
  createUsuario,
  editUsuario,
  deleteUsuario,
  loginUser,
  getUsuario,
} = require("../controllers/usuarios");
const { verifyToken } = require("../middleware/verifyAuth");
const router = express.Router();

router.post("/login", loginUser);

router.get("/usuarios", verifyToken, getUsuarios);
router.post("/usuarios", verifyToken, createUsuario);
router.get("/usuarios/:codigo_usuario", verifyToken, getUsuario);
router.patch("/usuarios/:codigo_usuario", verifyToken, editUsuario);
router.delete("/usuarios/:codigo_usuario", verifyToken, deleteUsuario);

module.exports = {
  router,
};
