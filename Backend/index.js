import express from "express";
import "dotenv/config.js";

const app = express();

const callback = () => {
  console.log(`El servidor esta inicializado en el puerto ${process.env.PORT}`);
};

app.listen(process.env.PORT, callback);
