import express from "express";
const app = express();

app.use("/test", (req, res) => {
  res.send("<h1>Welcome Express Authcheck Project !</h1>");
});

export default app;
