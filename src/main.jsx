import { StrictMode } from 'react';                 // its smth from react that warns about bugs
import { createRoot } from 'react-dom/client';      // it's a function that connects react to the page
import App from './App.jsx';                        // this is where the app will be drawn
import './index.css';                               // here we're gonna put the global style of the app

createRoot(document.querySelector('#root')).render( // find <div id="root"> in index.html where we decided we're gonna draw
  <StrictMode>
    <App />                                         {/* here is where everything is gonna e drawn */}
  </StrictMode>
);