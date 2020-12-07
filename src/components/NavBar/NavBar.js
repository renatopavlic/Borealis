import React from 'react';

import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0niUR5DiNAmb8ZKBmMQQTwgusRfdMVA0MXA&usqp=CAU"
      alt=""></img>
      <div className="navbar__info">
        <h2>Konfigurator servisa</h2>
        <h4>Izračunajte trošak servisa</h4>
      </div>
    </div>
  )
}

export default NavBar;
