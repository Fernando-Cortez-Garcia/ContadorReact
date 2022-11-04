import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
//importando imagen desde la carpeta public
import imglogo from './imagenes/logo.png';
//importado HOOKS
import { useState } from "react";
function App() {

  const [numClics,setNumClics] = useState(0);

  //definimos funciopnes del clic
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const restar = () => {
    setNumClics(numClics - 1);
    
  }
  const reiniciar = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      {/* Logo de la empresa */}
      <div className='logo-contenedor'>
        <img className='logo' src={imglogo} alt='logo del sitio' />
      </div>
       {/* contenedor del contador */}
      <div className='contenedor-contador'>
        <Contador numClics={numClics} />
        {/* botones */}
        <Boton texto='Sumar' esBotonclic={true} manejarClic={manejarClic} />
        <Boton texto='Restar' esBotonclick={false} manejarClic={restar}/>
        <Boton texto='Reiniciar' esBotonclick={false} manejarClic={reiniciar}/>
      </div>
    </div>
  );
}

export default App;
