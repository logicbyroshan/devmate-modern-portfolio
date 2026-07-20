import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactLenis root options={{ lerp: 0.06, wheelMultiplier: 1.2 }}>
    <App />
  </ReactLenis>
);
