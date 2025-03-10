# Auth Frontend

This is the frontend application for authentication, built with Vue.js. It includes features for user sign-up, sign-in, and profile management.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/zeinaMnada/auth-frontend.git
   cd auth-frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
VUE_APP_BACKEND_URL=http://your-backend-url
```

### Running the Application

To start the development server:

```sh
npm run serve
# or
yarn serve
```

The application will be available at `http://localhost:8080`.

### Building for Production

To build the application for production:

```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` directory.

### Linting and Formatting

To lint and format the code:

```sh
npm run lint
# or
yarn lint
```

## Project Structure

```
src/
├── api/                # API service files
├── assets/             # Static assets
├── components/         # Vue components
├── router/             # Vue Router configuration
├── store/              # Vuex store configuration
├── types/              # TypeScript types
├── utils/              # Utility functions
├── views/              # Vue views (pages)
├── App.vue             # Root component
├── main.ts             # Entry point
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

