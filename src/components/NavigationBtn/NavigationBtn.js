import React from 'react';

import { Button } from '@material-ui/core';
import "./NavigationBtn.css";

function NavigationBtn( {nextPage, prevPage}) {
  return (
    <div className="navigationbtn">
        <Button variant="contained" onClick={prevPage}>Natrag</Button>
        <Button variant="contained" color="primary" onClick={nextPage}>Dalje</Button>
    </div>
  )
}

export default NavigationBtn;
