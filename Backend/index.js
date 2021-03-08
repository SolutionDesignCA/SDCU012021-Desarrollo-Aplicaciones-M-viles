const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { router: userRoutes } = require("./app/routes/usuarios");
const db = require("./app/db/db");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.use("/api/v1", userRoutes);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((errorMessage) => {
    console.log("Error connecting to the database: ", errorMessage);
  });

app.listen(process.env.PORT, () => {
  console.log(`El servidor esta inicializado en el puerto ${process.env.PORT}`);
});

module.exports = app;
