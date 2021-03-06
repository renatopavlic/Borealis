import { Button } from '@material-ui/core';
import React from 'react';

import "./Success.css";

function Success() {


  const handleClose = () => {
    window.location.reload()
  }

  return (
    <div className="success">

      <h1 className="success__title">Vaša prijava je uspješno poslana</h1>
      <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala vam.</p>
      <Button onClick={handleClose} variant="contained" color="primary">Zatvori</Button>
      
    </div>
  )
}

export default Success;
