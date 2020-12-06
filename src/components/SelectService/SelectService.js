import React, { useEffect, useState, useContext } from 'react';

import { Button, TextField } from '@material-ui/core';

import { FormContext} from "../../context/FormContext";

import NavigationBtn from '../NavigationBtn/NavigationBtn';

import "./SelectService.css";



function SelectService({ nextPage, prevPage }) {


  // List of services
  const services = [
    {
      serviceName: "Zamjena ulja i filtera",
      price: 500,
      label: "filteri"
    },
    {
      serviceName: "Promjena pakni",
      price: 450,
      label: "pakni"
    },
    {
      serviceName: "Promjena guma",
      price: 100,
      label: "guma"
    },
    {
      serviceName: "Servis klima uređaja",
      price: 299,
      label: "klima"
    },
    {
      serviceName: "Balansiranje guma",
      price: 50,
      label: "balansiranje"
    },
    {
      serviceName: "Zamjena ulja u kočnicama",
      price: 299,
      label: "kočnice"
    }

  ];



  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useContext(FormContext);

  const handleChange = (c, i) =>{
    console.log("dupli upalio?", c.currentTarget, " ", services[i]);

    if(selected.indexOf(i) != -1) {

      selected.splice(selected.indexOf(i), 1);
      setSelected([...selected]);
    } else {

      setSelected([...selected, i]);

    }
  
  };

  let rezultat = selected.reduce(function(prev, cur) {
    console.log(prev, cur)

    if(!prev ) return services[cur].price;
    return prev + services[cur].price;
  }, 0);


  useEffect(() => {

    let selectedObjects = services.filter( (service, i) => {
      if(selected.indexOf(i) != -1) return service;
      
    })

    setFormData( data => {
      console.log("za igija: ", data)
      return {...data, selectedServices: selectedObjects}
    })

  }, [rezultat])


  
  return (

    <div className="selectservice">
      <h1 className="selectservice__title">Korak 2. Odaberite jednu ili više usluga za koje ste</h1>

      <section className="selectservice__options">

        {services.map( (service, i) => {
          return (
            <div className="selectservice__box">
              <input 
              key={i}
              type="checkbox" 
              id={service.label} 
              name={service.label}
              checked={(selected.indexOf(i) != -1)}
              onChange={(e) => handleChange(e, i)}
              />

            <label for={service.label}>{service.serviceName} ({service.price} kn)</label>
          </div>
          )
        })}
        
      </section>

      <div className="selectservice__price">
      <p className="selectservice__couponMsg">Hvala vam, unijeli ste ispravan kod kupona</p>
        <h2>Imam kupon</h2>
        <div className="selectservice__coupon">
           <input 
           type="text" 
           placeholder="Kupon kod"
           className="selectservice__couponInput" />
           <Button 
           variant="contained" 
           color="primary"
           className="selectservice__couponBtn">Primjeni</Button>
        </div>

        <div className="selectservice__calculation">
          <div className="selectservice__calculationColOne">
          <h4>OSNOVICA:</h4>
          <h4>Popust (30%):</h4>
          <h1>Ukupno:</h1>
          </div>

          <div className="selectservice__calculationColTwo">
          <h4>950,00 kn</h4>
          <h4>- 280,00 kn</h4>
          <h1><strong>{rezultat},00 kn</strong></h1>
          </div>
  
        </div>

      </div>

      <NavigationBtn
            prevPage={prevPage}
            nextPage={nextPage} />
    </div>
  )
}

export default SelectService;

/*


*/