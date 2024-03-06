// ButtonSolicitud.js
import React from 'react';

const ButtonSolicitud = ({ message }) => {

  const handleWhatsApp = () => {
   
    const phoneNumber = '+542213587404';

 
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="Button" onClick={handleWhatsApp}>Solicitar Turno</div>
  );
};

export default ButtonSolicitud;
