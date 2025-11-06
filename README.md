# bogorg.github.io

The official website for bogorg - Making things work, weirdly.

## About

bogorg is dedicated to the art of making things work in the weirdest possible way. We build strange, inefficient, and oddly satisfying solutions that still get the job done.

## Tech Stack

- **Vite** - Build tool and dev server
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

This site is deployed to GitHub Pages. The build output in the `dist` folder is automatically deployed.

### Building for GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the production build ready for deployment.

3. Configure GitHub Pages to deploy from the `dist` folder.

## Project Structure

```
bogorg.github.io/
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── NavLink.tsx
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── assets/        # Static assets
│   ├── App.tsx        # Main app component
│   └── main.tsx        # Entry point
├── public/            # Public assets
├── dist/              # Build output
└── package.json       # Dependencies and scripts
```

## Contributing

Got a brilliantly terrible idea? We want to see it! Visit our [GitHub organization](https://github.com/bogorg) to contribute.

## License

Built with questionable decisions and a lot of fun.

© 2024 bogorg - Making things work, weirdly
