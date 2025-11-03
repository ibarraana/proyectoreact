type Props = {
  nombre: string;
};

// Componente funcional con TypeScript
export default function Saludo({ nombre }: Props) {
  return <h1>¡Hola, {nombre}!</h1>;
}  
