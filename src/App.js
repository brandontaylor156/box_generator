import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';
import './App.css';
    
function App() {
  const colorsArray = []
  const sizeArray = []

  const [colors, setColors] = useState(colorsArray);
  const [sizes, setSizes] = useState(sizeArray);
  
  const addColor = ( newColor ) => {
      setColors(colors.concat(newColor));
  }

  const addSize = ( newSize ) => {
      setSizes(sizes.concat(newSize));
  }
  
  return (
      <>
          <ColorForm onNewColor={ addColor } onNewSize={ addSize }/>
          <ColorDisplay colors={ colors } sizes={sizes}/>
      </>
  );
}
  

    
export default App;

