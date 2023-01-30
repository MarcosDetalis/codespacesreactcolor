import { useState } from 'react'
import shortid from "shortid";
import './App.css'
 import Addcolor from "./componentes/Addcolor";
import Viewcolor from './componentes/Viewcolor';
function App() {
  const colorData = [
   
    
  ];
  //estado
  const [colors, setUsers] = useState(colorData);
  console.log(colors);
  //agregar colores
  const agregarUsuario = (color) => {
    color.id = shortid();
    setUsers([...colors, color]);
  };


  return (
    <div className="App">
      <Addcolor agregar={agregarUsuario}></Addcolor>
      <Viewcolor colores={colors}></Viewcolor>
    </div>
  );
}

export default App