const express = require("express");
const app = express();
const connexionDB = require("./src/db/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const errorHandler = require("./src/middleware/errorHandler");

const userRoutes = require("./src/routes/userRoutes");

dotenv.config();
connexionDB();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World !");
});

app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Le seurveur tourne sous http://localhost:3000");
});
