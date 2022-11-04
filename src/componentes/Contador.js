import React from "react";
import '../estilos/Contador.css';
function Contador({ numClics }) {
  return (
    <div className="contador">
      <h1>{numClics}</h1>
    </div>
  );


}

export default Contador;