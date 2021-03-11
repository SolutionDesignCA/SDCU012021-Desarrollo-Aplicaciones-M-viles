const express = require("express");
const {
  getUsuariosPorGrupo,
  getUsuariosPorGrupoID,
} = require("../controllers/grupoPermisos");
const router = express.Router();

router.get("/grupo-permisos/usuarios", getUsuariosPorGrupo);
router.get("/grupo-permisos/:codigo_grupo/usuarios", getUsuariosPorGrupoID);

module.exports = {
  router,
};
