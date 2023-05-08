import express from "express";
import cors from "cors";
import { PORT } from "./src/config.js";
import UsersRoute from "./src/routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/users", UsersRoute);

app.listen(PORT, () => {
  console.log(`Server running on port = [${PORT}]`);
});