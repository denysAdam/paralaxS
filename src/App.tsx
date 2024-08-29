

import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      Object.assign(document.documentElement, {
        style: `--x:${(e.clientX - window.innerWidth / 2) * -.01}deg;
                --y:${(e.clientY - window.innerHeight / 2) * -.02}deg;`
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="layers">
      <div className="layers_container">
          <div className="layers_item layer-1" ></div>
          <div className="layers_item layer-2" ></div>
          <div className="layers_item layer-3">
              <div className="text-content">
                  <h1>Paralax space</h1>
                  <div className="text-content_p">
                      Creating a paralax effect with CSS and JS
                  </div>
                  <button className="button-start" onClick={() => {window.open('https://github.com/denysAdam', '_blank')}} >Check portfolio</button>
              </div>
          </div>
          
          
          <div className="layers_item layer-4" ></div>
      </div>
  </section>
)}

export default App
