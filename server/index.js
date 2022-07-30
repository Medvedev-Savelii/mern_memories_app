import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import chalk from "chalk";
/////////////////////////////////////////////////////
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://admin:123@cluster0.ahxvvop.mongodb.net/auth_role?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(chalk.bgBlue("DB Conection!!!")))
  .catch((err) => console.log(chalk.bgRed("Error: " + err)));

app.listen(PORT, () => {
  console.log(chalk.bgBlue(`Server Running on Port: ${PORT}`));
});
