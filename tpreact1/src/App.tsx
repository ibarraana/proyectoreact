// src/App.t
import Saludo from "./componentes/Saludo";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <Saludo nombre="Mundo" />
      <Saludo nombre="React" />
      <Saludo nombre="Ana" />
    </div>
  );
}

