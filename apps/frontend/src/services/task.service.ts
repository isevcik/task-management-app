import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { TaskDTO, TaskListDTO } from "@task-management-app/shared"

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
}
