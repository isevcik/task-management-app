## Task Management App built with Angular and a Node.js

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
