import React from 'react';

import "./Success.css";

function Success() {
  return (
    <div className="success">
      <h1 className="success__title">Vaša prijava je uspješno poslana</h1>
      <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala vam.</p>
      <button>Zatvori</button>
    </div>
  )
}

export default Success;
