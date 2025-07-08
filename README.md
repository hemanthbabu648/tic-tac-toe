# Tic Tac Toe

A simple Tic Tac Toe game built with React and Vite.

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm start
```
The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

To create a production build:
```sh
npm run build
```
The output will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```sh
npm run preview
```

## Project Structure

```
src/
  App.jsx
  helpers.jsx
  index.jsx
  components/
    GameBoard.jsx
    SquareBox.jsx
  styles/
    root.scss
```

- Main entry: [`src/index.jsx`](src/index.jsx)
- App logic: [`src/App.jsx`](src/App.jsx)
- Game logic helper: [`src/helpers.jsx`](src/helpers.jsx)
- Board UI: [`src/components/GameBoard.jsx`](src/components/GameBoard.jsx)
- Square UI: [`src/components/SquareBox.jsx`](src/components/SquareBox.jsx)
- Styles: [`src/styles/root.scss`](src/styles/root.scss)

## Styling

Styles are written in SCSS and imported in [`src/App.jsx`](src/App.jsx):

```js
import "./styles/root.scss";
```

## Game Logic

Winner calculation is handled by [`calculateWinner`](src/helpers.jsx).

## Linting and Formatting

- Lint: `npm run lint`
- Format: `npm run format`

## Deploy to GitHub Pages

1. Install the `gh-pages` package:
   ```sh
   npm i -D gh-pages
   ```

2. Add the following scripts to your `package.json` if not present:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy:
   ```sh
   npm run deploy
   ```

Then follow the normal procedure in GitHub Pages and select the `gh-pages` branch.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
