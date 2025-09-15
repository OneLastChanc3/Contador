import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic= () => {
    setNumClics(numClics + 1);
  } 

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
        <div className='logo-contenedor'>
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={numClics} ></Contador>
          <Boton texto='Clic'
              esBotonDeClick={true}
              manejarClic={manejarClic} >
              clic
          </Boton>
          <Boton  texto='reiniciar'
              esBotonDeClick={false}
              manejarClic={reiniciarContador}>
             reiniciar
          </Boton>
        </div>
    </div>
  );
}

export default App;
