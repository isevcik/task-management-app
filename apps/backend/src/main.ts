import express from "express";
import cors from "cors";

import { TaskDTO } from "@task-management-app/shared";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.send({ status: "ok" });
});

app.post("/api/task", (req, res) => {
  const taskDTO: TaskDTO = req.body;
})

app.listen(3000, () => console.log("Backend running on 3000"));


