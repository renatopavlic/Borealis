import React, { useEffect, useState, useContext } from 'react';

import { Button, TextField } from '@material-ui/core';

import { FormContext} from "../../context/FormContext";

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
  const [coupon, setCoupon] = useState(false);
  const [couponValue, setCouponValue] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [tax, setTax] = useState(0);
  const [calcWindow, setCalcWindow] = useState(false);
  const [rezultat, setRezultat] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const handleChange = (c, i) =>{
    // console.log("dupli upalio?", c.currentTarget, " ", services[i]);

    if(selected.indexOf(i) != -1) {

      selected.splice(selected.indexOf(i), 1);
      setSelected([...selected]);
    } else {

      setSelected([...selected, i]);

    }
  };

  const handleCoupon = () => {
    coupon ? setCoupon(false) : setCoupon(true)
  };

  const izracunaj = selected.reduce(function(prev, cur) {
      console.log(prev, cur)
  
      if(!prev ) return services[cur].price;
      return prev + services[cur].price;
    }, 0);

  


  const handleCouponValue = () => {
    if( couponValue === "borealis") {
      setSuccessMsg(true);
      setCalcWindow(true);
      setTax(izracunaj * 0.3);
      setFormData( data => {
        return {...data, finalPrice: finalPrice}
      })
    } else if (couponValue === "") {
      

    } else {
      alert("Pogrešan kod!")
    }
  } ;

  const save = () => {

    handleCouponValue();

    let selectedObjects = services.filter( (service, i) => {
      if(selected.indexOf(i) != -1) return service;
      
    })

    setFormData( data => {
      return {...data, selectedServices: selectedObjects, finalPrice: calcWindow ? finalPrice : rezultat}
    })
  }


  useEffect(() => {

    handleCouponValue();

    let selectedObjects = services.filter( (service, i) => {
      if(selected.indexOf(i) != -1) return service;
      
    })

    setFormData( data => {
      return {...data, selectedServices: selectedObjects, finalPrice: rezultat}
    })

  }, [rezultat]);

  useEffect(() => {

    let selectedIndexes = [];
    services.forEach( (service, i) => {
      for( let s = 0; s < formData.selectedServices.length; s++) {
        if(service.label === formData.selectedServices[s].label) {
          selectedIndexes.push(i)
        }
      }
    })

    console.log(selectedIndexes);
    
    setSelected(selectedIndexes)

  }, []);

  useEffect(() => {

    setRezultat(izracunaj)

  }, [selected]);

  useEffect(() => {

    setFinalPrice(rezultat - tax);
  }, [tax])


console.log(finalPrice)
  
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
        {successMsg ? (<p className="selectservice__couponMsg">Hvala vam, unijeli ste ispravan kod kupona</p>) : ("")}
      
        <h3 className="selectservice__couponTitle" onClick={handleCoupon}>Imam kupon</h3>

        {coupon ? 
        (<div className="selectservice__coupon">
        <input 
        type="text" 
        placeholder="Unesite kod kupona ovdje"
        className="selectservice__couponInput"
        onChange={(e) => setCouponValue(e.target.value)} />
        <Button 
        variant="contained" 
        color="primary"
        onClick={save}
        className="selectservice__couponBtn">Primjeni</Button>
     </div>) : ("")}

     {calcWindow ?
      (
      <div className="selectservice__calculation">
      <div className="selectservice__calculationColOne">
      <h4>OSNOVICA:</h4>
      <h4>Popust (30%):</h4>
      </div>

      <div className="selectservice__calculationColTwo">
      <h4>{rezultat},00 kn</h4>
      <h4>- {tax} kn</h4>
      </div>
      </div>) : ("")}

     <div className="selectservice__finalPrice">
     <h2>Ukupno: </h2>
     <h2>{calcWindow ? finalPrice : rezultat} kn</h2>
     </div>     

      </div>

      <div className="selectservice__navigation">
      <Button variant="contained" onClick={prevPage}>Natrag</Button>
      {formData.selectedServices.length > 0 ? (<Button variant="contained" color="primary" onClick={() => {
        save();
        nextPage()}}>Dalje</Button>) : ("")}
      
 
      </div>
    </div>
  )
}

export default SelectService;
