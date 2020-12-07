import React, { useContext, useEffect } from 'react';
import NavigationBtn from '../NavigationBtn/NavigationBtn';

import {FormContext} from "../../context/FormContext"
import "./Overview.css";

function Overview({ nextPage, prevPage}) {

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
            <button>Uredi</button>
          </div>
            <h5>{formData.vehicleSelected}</h5>
        </div>
        <div className="overview__right">
          <div className="overview__editbox">
          <h3>ODABRANE USLUGE</h3>
          <button>Uredi</button>
          </div>
          <div className="overview__price">

          {formData.selectedServices.map( service => {
              return (
                <div className="overview__serviceBox">
                  <h3>{service.serviceName}</h3>
                  <h3>{service.price}</h3>
                </div>
              )
            })}

          </div>
          <div className="overview__finalPrice">
            <h3>Total : {formData.finalPrice}</h3>
          </div>
        </div>
      </div>

      <div className="overview__row">
        <div className="overview__left">
          <div className="overview__editbox">
          <h3>Kontakt podaci</h3>
          <button>Uredi</button>
          </div>
          <h4>Ime i prezime:</h4><label>{formData.fullName}</label>
          <h4>Broj telefona:</h4><label>{formData.phoneNumber}</label>
        </div>
        <div className="overview__right">
          <h4>Email adresa: </h4><span>{formData.email}</span>
          <h4>Napomena</h4><span>{formData.notes}</span>
        </div>
      </div>

      <NavigationBtn
            prevPage={prevPage}
            nextPage={nextPage} />
     
    </div>
  )
}

export default Overview;

/*
<h4>Zamjena ulja i filtera</h4> <label>500,00 kn</label>
            <h4>Promjena pakni</h4><label>450,00 kn</label>
            <h4>Popust (30%): -285,00 kn</h4>
            <h3>Ukupno <strong>665,00 kn</strong></h3>

  {formData.servicesSelected.map( service => {
              return (

              )
            })};

*/