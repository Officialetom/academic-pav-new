# Preliminary Pages — Academic PAV University

This repository contains the **Preliminary Pages** of the Academic PAV University web application. It provides the public-facing interface through which visitors can explore the platform and access relevant information before entering their respective dashboards.

The application is built with React, TypeScript, and Vite.

## Prerequisites

Before setting up the project, install the following:

- **Node.js** — preferably a compatible LTS version.
- **npm** — included with Node.js.
- **Git** — for cloning the repository.
- **Visual Studio Code** — recommended for development.

Verify your installations:

```bash
node -v
npm -v
git --version
```

## Getting Started

### 1. Clone the Repository

Open your terminal or Git Bash and run:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-PRELIMINARY-REPOSITORY.git
```

Replace the example URL with the actual GitHub repository URL.

### 2. Navigate into the Project

```bash
cd YOUR-PRELIMINARY-REPOSITORY
```

### 3. Install Dependencies

Install the project's required packages:

```bash
npm install
```

Alternatively, if `package-lock.json` is included, use the following for a clean installation based on the committed lockfile:

```bash
npm ci
```

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

Vite will display a local development URL, typically:

```text
http://localhost:5173
```

Open the displayed URL in your browser to view the Preliminary Pages.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates an optimized production build. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint checks, if configured. |

## Technology Stack

- React
- TypeScript
- Vite
- React Router, if configured
- Tailwind CSS, if configured
- Font Awesome, if configured
