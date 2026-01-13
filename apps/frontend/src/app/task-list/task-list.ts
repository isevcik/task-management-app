import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskDetail } from '../task-detail/task-detail';

@Component({
  selector: 'app-task-list',
  imports: [TaskDetail],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  protected readonly taskService = inject(TaskService)

  constructor() {
    this.taskService.loadTasks();
  }
}
