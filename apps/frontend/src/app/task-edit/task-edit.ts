import { Component, computed, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { TaskDTO, TaskEditDTO } from '@task-management-app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

/**
 * Task edit component. Provides form to edit task data.
 * Supports both the creation of new and modification of existing tasks.
 */
@Component({
  selector: 'app-task-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './task-edit.html',
  styleUrl: './task-edit.scss',
})
export class TaskEdit {
  protected readonly taskService = inject(TaskService)
  protected readonly router = inject(Router)
  protected readonly route = inject(ActivatedRoute)

  // get taskId from URL
  protected readonly taskId = toSignal(
    this.route.paramMap.pipe(
      map(p => p.get('taskId')),
    )
  );

  // if taskId is present we are editing otherwise we are adding a new task
  protected readonly isEdit = computed(() => !!this.taskId())

  protected readonly taskForm = new FormGroup({
    name: new FormControl('', {nonNullable: true}),
    description: new FormControl(''),
  });

  // find the task by id and initialize the form
  constructor() {
    effect(() => {
      const taskId = this.taskId();
      const tasks = this.taskService.tasks();

      if (typeof taskId === "string") {
        const task = tasks.find(task => task.id === taskId);

        if (task) {
          this.initializeFormByTask(task);
        }
      }
    });
  }

  initializeFormByTask(task: TaskDTO) {
    this.taskForm.patchValue(task);
  }

  // save the task and navigate to the list
  saveTask() {
    if (!this.taskForm.valid) {
      return;
    }

    const taskDTO = this.taskForm.value as TaskEditDTO;

    if (this.isEdit()) {
      this.updateTask(taskDTO);
    } else {
      this.addTask(taskDTO);
    }

    this.router.navigate(['/']);
  }

  updateTask(taskDTO: TaskEditDTO) {
    this.taskService.updateTask(this.taskId() as string, taskDTO);
  }

  addTask(taskDTO: TaskEditDTO) {
    this.taskService.addTask(taskDTO);
  }
}
