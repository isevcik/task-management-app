## Task Management App built with Angular and Node.js

![Screenshot](https://github.com/isevcik/task-management-app/blob/main/screenshot.png?raw=true)

### Installation & Running the app

### Prerequisites

Make sure you have installed:

- Node.js (v24.12.0 or higher recommended)
- pnpm or npm (comes with Node.js)

### Installation

Please clone the repo and install npm packages:

```bash
git clone git@github.com:isevcik/task-management-app.git
cd task-management-app
pnpm install

cd apps/backend
pnpm install

cd ../frontend
pnpm install

# go back to the root of the app
cd ../..
```

### Running

To start the application in local development, please start both the frontend and the backend in separated terminals:
To start a backend:

```bash
cd apps/backend && npm run dev
```

To start a frontend:

```bash
cd apps/frontend && npm run start
```

Once the both are running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Current State Overview

Currently, the app offers simple task management functionality. A task consists of a name and an optional description. User can create an unlimited number of tasks, and existing tasks can be edited.

### Current Limitations:

- Single-user only: The app does not yet support multiple users.

- Non-persistent storage: Tasks are stored in an in-memory database and are lost when the application restarts.

### Recommended Next Features

Given the limited four-hour development window, several ideas for future expansion have been identified:

- Persistent Database: Ensure data is saved across sessions.

- Multi-user Support & Authentication: Allow users to create accounts and manage private tasks.

- Completion Status: Add a "completed" checkmark and the ability to filter tasks by status.

- Delegation: Enable users to assign tasks to others.

- Organization: Support for categories, tags, or projects.

- Deadlines: Implement due dates and automated notifications.

### Trade-offs

- In-memory database: Chosen for speed of development over data persistence.

- Single-user: Authentication was omitted to focus on core task logic.

- No UI Framework: To save time, no CSS presets or UI kits (such as Material UI or Tailwind CSS) were implemented.
