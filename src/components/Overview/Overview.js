import React from 'react';
import NavigationBtn from '../NavigationBtn/NavigationBtn';
import "./Overview.css";

function Overview({ nextPage, prevPage}) {
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
          <h5>Volkswagen</h5>
        </div>
        <div className="overview__right">
          <div className="overview__editbox">
          <h3>ODABRANE USLUGE</h3>
          <button>Uredi</button>
          </div>
          <div className="overview__price">
            <h4>Zamjena ulja i filtera</h4> <label>500,00 kn</label>
            <h4>Promjena pakni</h4><label>450,00 kn</label>
            <h4>Popust (30%): -285,00 kn</h4>
            <h3>Ukupno <strong>665,00 kn</strong></h3>
          </div>
        </div>
      </div>

      <div className="overview__row">
        <div className="overview__left">
          <div className="overview__editbox">
          <h3>Kontakt podaci</h3>
          <button>Uredi</button>
          </div>
          <h4>Ime i prezime:</h4><label>Renato Pavlić</label>
          <h4>Broj telefona:</h4><label>098555555</label>
        </div>
        <div className="overview__right">
          <h4>Email adresa: </h4><span>renato@poslovni.com</span>
          <h4>Napomena</h4><span>Kod auta se prilikom prelaska preko rupa čuje lupanje pa bi i to trebalo pogledati</span>
        </div>
      </div>

      <NavigationBtn
            prevPage={prevPage}
            nextPage={nextPage} />
     
    </div>
  )
}

export default Overview;
