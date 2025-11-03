// Definición de tipos para las props (PropTypes)
type Props = {
  nombre: string;
  edad: number;
  urlImagen: string;
}

// Componente funcional con TypeScript
export default function TarjetaPerfil({ nombre, edad, urlImagen }: Props) {
  return (
    <div>
      <h2>Hola soy {nombre}</h2>
      
      <p>Tengo {edad} años</p>
      
      <img src={urlImagen} alt="No se encontro la imagen" width="500px" height="500px" />
    </div>
  );
}

