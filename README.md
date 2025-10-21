# Astro Template

## Project Overview

This is a comprehensive starter template for building websites with [Astro](https://astro.build/). It's configured for server-side rendering (SSR) using a Node.js adapter. The project is well-structured, integrating several popular tools and libraries to provide a robust development experience.

### Key Technologies & Features

*   **Framework**: [Astro](https://astro.build/)
*   **UI Frameworks**: [React](https://react.dev/) is integrated, allowing for the use of React components alongside Astro's native `.astro` components.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) is used for styling, configured with a custom theme and plugins for typography and animations.
*   **Content**: The project supports content creation using Markdown and [MDX](https://mdxjs.com/), with a pre-configured `sitemap` generator. It also includes a utility for fetching data from a [Strapi](https://strapi.io/) CMS.
*   **Performance**:
    *   [Partytown](https://partytown.builder.io/) is integrated to offload third-party scripts to a web worker.
    *   Vite is configured to minify HTML and remove console logs in production builds.
*   **Tooling & Conventions**:
    *   The project uses `pnpm` as the package manager.
    *   Code formatting and linting are handled by [Biome](https://biomejs.dev/) and [Prettier](https://prettier.io/).
    *   TypeScript is used throughout the project.
    *   Path aliases (e.g., `#/components/...`) are configured for cleaner imports.
    *   Environment variables are managed through a `.env` file, which is generated from `.env.example` on the first setup.

## Building and Running

The project uses `pnpm` for package management.

### Initial Setup

1.  **Install Dependencies**:
    ```bash
    pnpm install
    ```
    This will also trigger the `postinstall` script, which creates a `.env` file from `.env.example`.

2.  **Configure Environment**:
    Open the newly created `.env` file and fill in the required environment variables, such as `SITE_URL` and any Strapi-related keys.

### Development

*   **Run the development server**:
    ```bash
    pnpm run dev
    ```
    This starts the server on `http://localhost:4321` by default.

### Production

*   **Build the project**:
    ```bash
    pnpm run build
    ```
    This command type-checks the code with `astro check` and then builds the project for production into the `./dist` directory.

*   **Start the production server**:
    ```bash
    pnpm run start
    ```
    This command runs the server from the `./dist` directory.

### Other Commands

*   **Generate Strapi types**:
    ```bash
    pnpm run types:generate
    ```
    This command uses `openapi-typescript` to generate TypeScript types from a Strapi API documentation file.

*   **Formatting and Linting**:
    ```bash
    # Format all files with Biome
    pnpm run format

    # Lint and apply automatic fixes with Biome
    pnpm run lint:fix

    # Format all files with Prettier (alternative)
    pnpm run prettier
    ```

## Development Conventions

*   **Code Style**: The project enforces a consistent code style using Biome and Prettier. It's recommended to use the provided formatting commands (`pnpm run format`) before committing changes.
*   **Component Structure**: Components are organized by framework (`astro`, `custom-react`, `shadcn`). Shared utilities, constants, and types are located in the `src/shared` directory.
*   **Environment Variables**: All secret keys and environment-specific settings should be stored in the `.env` file. The `astro.config.mjs` file defines the schema for these variables, making them accessible in a type-safe way via `import.meta.env`.
*   **API Interaction**: For interacting with the Strapi API, use the `fetchApi` utility located at `src/shared/lib/strapi.ts`.
