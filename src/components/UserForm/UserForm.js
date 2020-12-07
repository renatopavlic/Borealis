import React, { useState } from 'react';

import SelectVehicle from '../SelectVehicle/SelectVehicle';
import SelectService from '../SelectService/SelectService';
import Contact from "../Contact/Contact";
import Overview from "../Overview/Overview";
import Success from "../Success/Success";

import "./UserForm.css";


function UserForm() {

  const [step, setStep] = useState(1);

  const nextPage = () => {
    setStep(step + 1);
  }

  const prevPage = () => {
    setStep(step - 1)
  }

  const firstPage = () => {
    setStep(1)
  }

  const secondPage = () => {
    setStep(2)
  }

  const thirdPage = () => {
    setStep(3)
  }

  switch (step) {
    case 1:
      return (
        <SelectVehicle
         nextPage={nextPage} 
         prevPage={prevPage}/>  
      );

    case 2:
      return(
        <SelectService
         nextPage={nextPage} 
         prevPage={prevPage} />
      );

    case 3:
      return (
        <Contact
         nextPage={nextPage} 
         prevPage={prevPage} />
      );

    case 4:
      return (
        <Overview
         nextPage={nextPage} 
         prevPage={prevPage}
         firstPage={firstPage}
         secondPage={secondPage}
         thirdPage={thirdPage} />
      );

    case 5:
      return (
        <Success />
      );

    default: 
      return (
        <SelectVehicle
         nextPage={nextPage} 
         prevPage={prevPage} />
      )
  }
  
}

export default UserForm;
