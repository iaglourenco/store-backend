import express from "express";
import "express-async-errors";
import "./database/connection";
import routes from "./routes";
import path from "path";
import errorHandler from "./errors/handler";
const app = express();

app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
