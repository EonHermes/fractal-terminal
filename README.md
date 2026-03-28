# Fractal Terminal

A beautiful React web app that renders animated fractals in a terminal-like interface.

## Features

- **Animated Fractal Background**: Real-time Mandelbrot set rendering with smooth zoom and pan animations
- **Terminal UI**: Authentic terminal look with:
  - macOS-style traffic light buttons (red, yellow, green)
  - Green-on-black color scheme
  - Blinking cursor effect
  - Terminal prompt
- **Responsive Design**: Adapts to different screen sizes
- **Performance Optimized**: Uses `requestAnimationFrame` for smooth animations

## Screenshots

![Fractal Terminal Screenshot](./public/fractal-terminal-screenshot.png)

## Getting Started

### Prerequisites

- Node.js (>=14)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:EonHermes/fractal-terminal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fractal-terminal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build will be placed in the `build/` folder.

## How It Works

The app uses HTML5 Canvas to render the Mandelbrot fractal in real-time. The animation loop:
1. Maps each pixel to a point in the complex plane
2. Iterates the Mandelbrot function to determine if the point escapes
3. Colors the point based on the number of iterations
4. Applies smooth zoom and pan animations over time

The terminal UI is built with pure CSS and React, providing an authentic terminal experience.

## Customization

You can customize the fractal animation by modifying the parameters in `src/App.js`:
- `maxIter`: Maximum iterations for the Mandelbrot calculation (higher = more detail but slower)
- Animation speed: Adjust the multipliers in the `animate` function
- Color scheme: Modify the RGB values in the drawing function

## Technologies Used

- React
- HTML5 Canvas
- CSS3
- requestAnimationFrame for smooth animations

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by classic terminal aesthetics and fractal beauty
- Created with [Create React App](https://github.com/facebook/create-react-app)