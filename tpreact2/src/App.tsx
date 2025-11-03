// src/App.t
import TarjetaPerfil from "./componentes/TarjetaPerfil";
import fotoPerfil from "./assets/fotodibujo.png"; 

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <TarjetaPerfil nombre="Ana" edad={18} urlImagen={fotoPerfil} />
    </div>
  );
}

