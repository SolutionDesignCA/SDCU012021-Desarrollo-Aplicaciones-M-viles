import express from "express";
import "dotenv/config.js";
import cors from "cors";

const app = express();
app.use(cors());

const callback = () => {
  console.log(`El servidor esta inicializado en el puerto ${process.env.PORT}`);
};

app.listen(process.env.PORT, callback);

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});
