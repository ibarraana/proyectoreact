import { useState } from 'react';

export default function Interruptor() {

  const [estaEncendido, setEstaEncendido] = useState(false);
  const [nombreBoton, setNombreBoton] = useState('Encender');
  const [colorDeFondo, setColorDeFondo] = useState('black');

  function activarDesactivar() {
    setEstaEncendido(!estaEncendido);

    if(estaEncendido) {
      setNombreBoton('Encender');
      setColorDeFondo('black');   
    }     
    else {
      setNombreBoton('Apagar'); 
      setColorDeFondo('yellow');  
    }       
  };  

  return (
    <div style={{ backgroundColor: colorDeFondo, padding: '500px' }}>
            
      <button onClick={activarDesactivar}>{nombreBoton}</button>
    </div>
  );
}
