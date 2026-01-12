# Paste App

A modern, responsive paste management application built with React, Redux Toolkit, and Tailwind CSS. This app allows users to create, update, view, and manage text pastes with a clean and intuitive interface.

## Features

- **Create Pastes**: Easily create new text pastes with titles and content
- **Update Pastes**: Edit existing pastes seamlessly
- **View Pastes**: Browse all created pastes in a list view
- **Delete Pastes**: Remove unwanted pastes
- **Persistent Storage**: Pastes are stored in localStorage for data persistence
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Toast Notifications**: User-friendly notifications for all actions

## Tech Stack

### Frontend Framework

- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **Vite 7.2.4** - Fast build tool and development server

### State Management

- **Redux Toolkit 2.11.2** - State management library for predictable state updates
- **React Redux 9.2.0** - Official React bindings for Redux

### Routing

- **React Router DOM 7.12.0** - Declarative routing for React applications

### Styling

- **Tailwind CSS 4.1.18** - Utility-first CSS framework for rapid UI development

### UI/UX

- **React Hot Toast 2.6.0** - Beautiful toast notifications

### Development Tools

- **ESLint 9.39.1** - Linting utility for JavaScript and JSX
- **TypeScript Types** - Type definitions for React and React DOM

### 🚀 [Live Demo: paste-app-iota-beige.vercel.app](https://paste-app-iota-beige.vercel.app)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd project-paste-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/
│   ├── Home.jsx          # Main paste creation/editing component
│   ├── Navbar.jsx        # Navigation component
│   ├── Paste.jsx         # Individual paste display component
│   └── ViewPaste.jsx     # Paste viewing component
├── redux/
│   ├── pasteSlice.js     # Redux slice for paste state management
│   └── store.js          # Redux store configuration
├── App.jsx               # Main app component with routing
├── main.jsx              # App entry point
└── index.css             # Global styles with Tailwind
```

## Usage

1. **Creating a Paste**: Click "Create My Paste", enter a title and content, then submit
2. **Viewing Pastes**: Navigate to the "All Pastes" section to see all created pastes
3. **Updating a Paste**: Click on a paste to edit it
4. **Deleting a Paste**: Use the delete option on any paste

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
