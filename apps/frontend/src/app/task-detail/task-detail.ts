import { Component, input } from '@angular/core';
import { TaskDTO } from '@task-management-app/shared';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.scss',
})
export class TaskDetail {
  task = input<TaskDTO>();
}
