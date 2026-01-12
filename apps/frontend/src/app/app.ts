import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly taskService = inject(TaskService)

  constructor() {
    this.taskService.loadTasks();
  }
}

