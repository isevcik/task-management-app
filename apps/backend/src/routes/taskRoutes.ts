import { Router } from "express";
import * as taskController from "../controllers/taskController";

const router = Router();

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTask);
router.post("/", taskController.saveTask);
router.put("/:id", taskController.updateTask);

export default router;