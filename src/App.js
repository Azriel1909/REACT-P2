
import './App.css';
import Boton from './components/button';
//Importar imagen
import pinkHatLogo from './images/logo-1.png';
//El componente App va a rendereizar dos botones
import Contador from './components/counter';
//Usaré Hooks
import { useState } from 'react';

function App() {

  //Usaré Hooks
  const [numeroClicks, setNumCliks] = useState(0);
  //Valor inicial del estado = 0

  //Definir función de Componente
  //Esto es una función flecha
  /**Puedes temporalmente mostrar un mensaje en la consola para verificar si el evento se ejecutó.
  console.log('Click');
  console.log('Reiniciar');
  */

  const ordenClick = () => {
    setNumCliks(numeroClicks + 1); 
  }
  /**En las funciones flechas siempre ocuparemos ; */
  const reiniciarContador = () => {
    setNumCliks(0);
  }
  return (
    <div className="App">
      <div className='logoContenedor'>
        <img 
        className='pictureLogo'
        src={pinkHatLogo}
        alt=''/>
      </div>
      <div className='contadorContenedor'>
        <Contador numeroClicks = {numeroClicks} />
        <Boton
          texto = 'Click'
          botonClick = {true}
          ordenClick ={ordenClick} />
        <Boton
          texto = 'Reiniciar'
          botonClick = {false}
          ordenClick ={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;