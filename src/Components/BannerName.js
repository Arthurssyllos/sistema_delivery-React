import React from "react";
import LocationComponent from '../api.js'; // Importe o componente de localização automática

function BannerName({ name, discount, more }) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h3>Oi Kawan e Arthur,</h3>
      <LocationComponent /> {/* Adicione o componente de localização aqui */}
      <p>
          Já que o BK deu lanche pra os calvos , integrantes do senai ganha Pizza aqui
      </p>
      <a href={more}>Saiba mais</a>
    </div>
  );
}

export default BannerName;
