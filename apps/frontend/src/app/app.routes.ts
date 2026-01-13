import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskEdit } from './task-edit/task-edit';

export const routes: Routes = [
  {
    path: "",
    component: TaskList,
  },
  {
    path: "task/:taskId",
    component: TaskEdit,
  },
  {
    path: "new-task",
    component: TaskEdit,
  }
];
