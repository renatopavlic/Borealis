import React, { useContext, useEffect } from 'react';
import NavigationBtn from '../NavigationBtn/NavigationBtn';

import {FormContext} from "../../context/FormContext"
import "./Overview.css";
import { Button } from '@material-ui/core';

function Overview({ nextPage, prevPage, firstPage, secondPage, thirdPage}) {

  const [formData, setFormData] = useContext(FormContext);

  console.log("data is: ", formData)

  return (
    <div className="overview">

      <div className="overview__info">
      <h1 className="overview__title">Korak 4. Pregled i potvrda vašeg odabira</h1>
      <p>Molim vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko Želite promijeniti neki od podataka, možete pritisnuti na gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis.</p>
      </div>

      <div className="overview__row">
        <div className="overview__left">
          <div className="overview__editbox">
            <h3>MODEL VOZILA</h3>
            <Button onClick={firstPage} variant="outlined">uredi</Button>
          </div>
            <h2 className="overview__vehicle">{formData.vehicleSelected}</h2>
        </div>
        <div className="overview__right">
          <div className="overview__editbox">
          <h3>ODABRANE USLUGE</h3>
          <Button onClick={secondPage} variant="outlined">uredi</Button>
          </div>
          <div className="overview__price">

          {formData.selectedServices.map( service => {
              return (
                <div className="overview__serviceBox">
                  <h3>{service.serviceName}</h3>
                  <h3>{service.price} kn</h3>
                </div>
              )
            })}

          </div>
          <div className="overview__finalPrice">
            <h3>Total : </h3>
            <h2>{formData.finalPrice} kn</h2>
          </div>
        </div>
      </div>

      <div className="overview__row">
        <div className="overview__left">
          <div className="overview__editbox">
          <h3>KONTAKT PODACI</h3>
          <Button onClick={thirdPage} variant="outlined">uredi</Button>
          </div>

          <h4 className="overview__contact">Ime i prezime: <span className="overview__span"> {formData.fullName}</span></h4>
          <h4 className="overview__contact">Broj telefona: <span className="overview__span">{formData.phoneNumber}</span></h4>
        </div>

        <div className="overview__right">
          <h4 className="overview__contact">Email adresa: <span className="overview__span">{formData.email}</span> </h4>
          <h4 className="overview__contact">Napomena:</h4><span className="overview__span">{formData.notes}</span>
        </div>
      </div>

      <div className="overview__navigation">
      <Button variant="contained" onClick={prevPage}>Natrag</Button>
      <Button variant="contained" color="primary" onClick={nextPage}>Pošalji</Button>
      </div>

      
    </div>
  )
}

export default Overview;