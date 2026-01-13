import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(protected taskService: TaskService) {
    // Make sure tasks are always loaded
    this.taskService.loadTasks();
  }
}

