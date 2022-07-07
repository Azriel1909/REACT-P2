import React from 'react';
import '../stylesheets/counter.css';
//Definir componente Funcional
function Contador ({ numeroClicks }) {
  return (
    <div className='contador'>
      {numeroClicks}
    </div>
  );
}

export default Contador;