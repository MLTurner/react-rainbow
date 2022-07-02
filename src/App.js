import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import Colorform from './Colorform';
import './App.css';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })

  return (
    <div className="App">
      {colors.map((color, i) =>
        <ColorBlock color={color}/>
      )}
    </div>
  );
}

export default App;
