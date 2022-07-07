import React from 'react';
import '../stylesheets/button.css';
//Definir componente Funcional
function Boton ({ texto, botonClick, ordenClick }) {
  return (
    <button className = { botonClick ? 'esBotonCLick' :   'esBotonReiniciar' }
      onClick = {ordenClick}>
      {texto}
    </button>
  );
}

//Exportación por defecto, sólo es un elemento.
export default Boton;

//Sintaxis de Desestructuración
/**Forma más fácil de entender los props, sólo nos referimos a la propiedad por su nombre (se utiliza como una variable)*/

//Clase basada en Condición (?)
/**Utilizar operador ternario que permite tomar decisiones en base de otro valor.*/

//Asignar Event Listener
/**onClick = {manejarClick} */