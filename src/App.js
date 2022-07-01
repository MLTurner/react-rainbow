import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import './App.css';

function App() {
  let colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })

  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default App;
