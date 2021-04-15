const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { router: usuariosRoutes } = require("./app/routes/usuarios");
const { router: grupoPermisosRoutes } = require("./app/routes/grupoPermisos");
const { router: ftpRoutes } = require("./app/routes/ftp");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", usuariosRoutes);
app.use("/api/v1", grupoPermisosRoutes);
app.use("/api/v1", ftpRoutes);

app.listen(process.env.PORT, () => {
  console.log(`El servidor esta inicializado en el puerto ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});
