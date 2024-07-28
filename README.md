<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background-color: #000;
            color: #fff;
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #f0f0f0;
        }
        a {
            color: #1e90ff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        code {
            background-color: #333;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #222;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        .section {
            margin-bottom: 20px;
        }
        .section-title {
            font-size: 1.5em;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>React + TypeScript + Vite</h1>
    <p>This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. This project uses React, TypeScript, and Vite to build a modern, fast web application.</p>

    <div class="section">
        <h2 class="section-title">Table of Contents</h2>
        <ul>
            <li><a href="#project-setup">Project Setup</a></li>
            <li><a href="#project-structure">Project Structure</a></li>
            <li><a href="#design-decisions">Design Decisions</a></li>
            <li><a href="#eslint-configuration">ESLint Configuration</a></li>
            <li><a href="#additional-information">Additional Information</a></li>
        </ul>
    </div>

    <div class="section">
        <h2 id="project-setup" class="section-title">Project Setup</h2>
        <p>To get started with this project, follow these steps:</p>

        <h3>Prerequisites</h3>
        <p>Ensure you have the following installed:</p>
        <ul>
            <li>Node.js (v16 or higher recommended)</li>
            <li>npm or yarn (package managers)</li>
        </ul>

        <h3>Installation</h3>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone &lt;repository-url&gt;
cd &lt;repository-name&gt;</code></pre>
            </li>
            <li>Install dependencies:
                <pre><code>npm install
# or
yarn install</code></pre>
            </li>
            <li>Start the development server:
                <pre><code>npm run dev
# or
yarn dev</code></pre>
            </li>
            <li>Open your browser and go to <code>http://localhost:3000</code> to view the application.</li>
        </ol>

        <h3>Building for Production</h3>
        <p>To build the project for production, run:</p>
        <pre><code>npm run build
# or
yarn build</code></pre>
        <p>This will create a <code>dist</code> directory with the production build of your app.</p>

        <h3>Running Tests</h3>
        <p>To run tests, use:</p>
        <pre><code>npm test
# or
yarn test</code></pre>
    </div>

    <div class="section">
        <h2 id="project-structure" class="section-title">Project Structure</h2>
        <p>Here’s an overview of the project structure:</p>
        <pre><code>/src
  /components       # Reusable React components
  /contexts         # Context providers for state management
  /pages            # Page components
  /services         # API client and service functions
  /hooks            # Custom React hooks
  /styles           # Global styles and CSS modules
  /types            # TypeScript type definitions
  /utils            # Utility functions and helpers
  App.tsx           # Main application component
  index.tsx         # Entry point for the React application
  index.css         # Global CSS file
/vite.config.ts     # Vite configuration file
/tsconfig.json      # TypeScript configuration file
/.eslintrc.js       # ESLint configuration file
/package.json       # Project metadata and dependencies</code></pre>

        <h3>Key Files</h3>
        <ul>
            <li><code>App.tsx</code>: The root component that sets up routing and global context providers.</li>
            <li><code>index.tsx</code>: The entry point where the React application is rendered.</li>
            <li><code>vite.config.ts</code>: Vite configuration for building and running the application.</li>
            <li><code>tsconfig.json</code>: TypeScript configuration for the project.</li>
            <li><code>.eslintrc.js</code>: ESLint configuration to ensure code quality and consistency.</li>
        </ul>
    </div>

    <div class="section">
        <h2 id="design-decisions" class="section-title">Design Decisions</h2>
        <ul>
            <li><strong>React + TypeScript</strong>: React is used for building the UI, and TypeScript is used for type safety and improved development experience.</li>
            <li><strong>Vite</strong>: Chosen for its fast build times and excellent development experience with Hot Module Replacement (HMR).</li>
            <li><strong>Context API</strong>: Used for state management across different parts of the application.</li>
            <li><strong>React Query</strong>: Used for fetching, caching, and synchronizing server data.</li>
            <li><strong>Tailwind CSS</strong>: For utility-first CSS styling (if used).</li>
        </ul>
    </div>

    <div class="section">
        <h2 id="eslint-configuration" class="section-title">ESLint Configuration</h2>
        <p>To ensure code quality and maintain consistency, the ESLint configuration is set up to include type-aware linting rules. Update the <code>parserOptions</code> in your <code>.eslintrc.js</code> as follows:</p>
        <pre><code>export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}</code></pre>
    </div>

    <div class="section">
        <h2 id="additional-information" class="section-title">Additional Information</h2>
        <p>For more details on each tool used, refer to their respective documentation:</p>
        <ul>
            <li><a href="https://reactjs.org/docs/getting-started.html">React Documentation</a></li>
            <li><a href="https://www.typescriptlang.org/docs/">TypeScript Documentation</a></li>
            <li><a href="https://vitejs.dev/guide/">Vite Documentation</a></li>
            <li><a href="https://eslint.org/docs/user-guide/getting-started">ESLint Documentation</a></li>
        </ul>
    </div>
</body>
</html>

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
