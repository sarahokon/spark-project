import React from 'react';
import './App.css';
import MapComponent from './map/map.js';

function App() {
  return (
    <div className="App">
        <div style={{alignItems: 'center'}}>
          <MapComponent></MapComponent>
        </div>
    </div>
  );
}

export default App;
