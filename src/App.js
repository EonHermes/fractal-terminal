import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const maxIter = 100;
    let zoom = 1;
    let offsetX = 0;
    let offsetY = 0;
    let startTime = null;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = (time - startTime) / 1000; // seconds

      // Zoom and pan slowly over time
      zoom = 0.5 + 0.5 * Math.sin(elapsed * 0.2); // oscillate between 0.5 and 1
      offsetX = Math.sin(elapsed * 0.1) * 0.5;
      offsetY = Math.cos(elapsed * 0.1) * 0.5;

      draw();
      requestAnimationFrame(animate);
    }

    function draw() {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const scale = Math.min(canvas.width, canvas.height) * zoom * 0.02;

      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          // Map pixel to complex plane
          const zx = (x - canvas.width / 2) / scale + offsetX;
          const zy = (y - canvas.height / 2) / scale + offsetY;

          let cx = zx;
          let cy = zy;
          let iter = 0;
          while (cx * cx + cy * cy < 4 && iter < maxIter) {
            const nx = cx * cx - cy * cy + zx;
            const ny = 2 * cx * cy + zy;
            cx = nx;
            cy = ny;
            iter++;
          }

          // Color based on iteration count
          const color = iter === maxIter ? 0 : 255 - Math.floor(255 * iter / maxIter);
          const green = Math.floor(color * 0.8);
          ctx.fillStyle = `rgb(0, ${green}, 0)`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
        <span className="terminal-title">Eon@fractal-terminal:~$ </span>
      </div>
      <div className="terminal-content">
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="terminal-prompt">
        <span>Eon@fractal-terminal:~$ </span>
        <span className="cursor">_</span>
      </div>
    </div>
  );
}

export default App;