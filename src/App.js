import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
//import './App.css';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color, index) => {
    return (
      <ColorBlock color={color} key={index} />
    )
  })
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
       {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  )
}

export default App;
