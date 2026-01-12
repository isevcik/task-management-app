import { Request, Response } from "express";
import { TaskDTO } from "@task-management-app/shared";

let taskMockDB: TaskDTO[] = [
    { id: "1", name: "Buy Groceries", description: "- Milk\n- Bread" },
    { id: "2", name: "Laundry" },
];

export const getAllTasks = (req: Request, res: Response): void => {
    res.status(200).json({
        count: taskMockDB.length,
        data: taskMockDB,
    });
};

export const getTask = (req: Request<{ id: string }>, res: Response): void => {
    const taskId = req.params.id;
    const task = taskMockDB.find((task) => task.id === taskId);

    if (!task) {
        res.status(404).json({ message: "Task not found" });
        return;
    }

    res.json(task);
};

export const saveTask = (req: Request<{}, {}, TaskDTO>, res: Response): void => {
    const newTask: TaskDTO = {
        id: `${taskMockDB.length + 1}`,
        name: req.body.name,
        description: req.body.description,
    };
    
    taskMockDB.push(newTask);

    res.status(201).json(newTask);
};

export const updateTask = (req: Request<{ id: string }, {}, TaskDTO>, res: Response): void => {
    const taskId = req.params.id;
    const taskIndex = taskMockDB.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
        res.status(404).json({ message: "Task not found" });

        return;
    }

    const newTask: TaskDTO = {
        id: taskId,
        name: req.body.name,
        description: req.body.description,
    };

    taskMockDB[taskIndex] = newTask;

    res.json({ message: "Task updated", task: newTask });
};