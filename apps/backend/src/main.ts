import express, { Application } from "express";
import cors from "cors";

import taskRoutes from "./routes/taskRoutes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.send({ status: "ok" });
});


app.use("/api/tasks", taskRoutes)

app.listen(3000, () => console.log("Backend running on 3000"));


