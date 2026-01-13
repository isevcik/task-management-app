import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskDetail } from '../task-detail/task-detail';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, TaskDetail],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  protected readonly taskService = inject(TaskService);

  constructor() {
    this.taskService.loadTasks();
  }
}
