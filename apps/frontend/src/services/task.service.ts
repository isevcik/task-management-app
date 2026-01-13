import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { TaskDTO, TaskEditDTO, TaskListDTO } from "@task-management-app/shared"

/**
 * Provides data persistence and retrieval for tasks.
 * This service handles API calls to the backend tasks endpoint.
 */
@Injectable({ providedIn: "root" })
export class TaskService {
  private apiUrl = "http://localhost:3000/api/tasks";

  tasks = signal<TaskDTO[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {
  }

  loadTasks() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<TaskListDTO>(this.apiUrl).subscribe({
      next: (data) => {
        this.tasks.set(data.data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load tasks');
        this.loading.set(false);
      }
    });
  }

  addTask(task: TaskEditDTO) {
    this.loading.set(true);
    this.error.set(null);

    this.http.post<TaskDTO>(this.apiUrl, task).subscribe({
      next: (data) => {
        this.tasks.set([...this.tasks(), data]);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to save task');
        this.loading.set(false);
      }
    })
  }

  updateTask(taskId: string, task: TaskEditDTO) {
    this.loading.set(true);
    this.error.set(null);

    this.http.put<TaskDTO>(`${this.apiUrl}/${taskId}`, task).subscribe({
      next: (data) => {
        const tasks = this.tasks().map(task => task.id !== taskId ? task : data)
        this.tasks.set(tasks);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to save task');
        this.loading.set(false);
      }
    })
  }
}
