import React, { useState, useContext, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { FormContext} from "../../context/FormContext";

import "./SelectVehicle.css";

function SelectVehicle({ nextPage }) {
  
  const vehicles = [{
    name: "peugeot",
    label: "Peugeot"
  }, {
    name: "volkswagen",
    label: "Volkswagen"
  }, {
    name: "citroen",
    label: "Citroen"
  }, {
    name: "audi",
    label: "Audi"
  }, {
    name: "bmw",
    label: "Bmw"
  }, {
    name: "seat",
    label: "Seat"
  }, {
    name: "alfaromeo",
    label: "Alfa Romeo"
  }, {
    name: "kia",
    label: "Kia"
  }, {
    name: "hyundai",
    label: "Hyundai"
  }, {
    name: "honda",
    label: "Honda"
  }, {
    name: "toyota",
    label: "Toyota"
  }];

 const [formData, setFormData] = useContext(FormContext);

 const [selected, setSelected] = useState("");

  const handleChange = c =>{
  
    setSelected(c.currentTarget.value);
  };

  useEffect(() => {

    // Save user selection
    setFormData( data => {
      return {...data, vehicleSelected: selected}
    });
  }, [selected])


  return (
    <div className="selectvehicle">

      <h1 className="selectvehicle__title">Korak 1. Odaberite proizvođača vašeg vozila</h1>

      <section className="selectvehicle__options">

      <form className="selectvehicle__form">
        <fieldset id="vehicles">
          {vehicles.map(v=>{
            return (<div key={v.value} className="selectvehicle__input">
              <input type="radio" value={v.name} name="vehicles" checked={selected===v.name} onChange={handleChange} />
              <label htmlFor={v.name}>{v.label}</label>
            </div>
            )
          })}
        </fieldset>
      </form>
      </section>
      {formData.vehicleSelected != "" ? (<Button 
      variant="contained" 
      color="primary" 
      onClick={nextPage}
      >Dalje</Button>) : ("Odaberite vozilo *")}
          
    </div>
  )
}

export default SelectVehicle;
