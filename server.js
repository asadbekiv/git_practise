import "dotenv/config";
import express from "express";
import app from "./app.js";

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
