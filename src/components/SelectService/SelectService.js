import { Button, TextField } from '@material-ui/core';
import React from 'react';
import NavigationBtn from '../NavigationBtn/NavigationBtn';
import "./SelectService.css";

function SelectService({ nextPage, prevPage }) {
  return (
    <div className="selectservice">
      <h1 className="selectservice__title">Korak 2. Odaberite jednu ili više usluga za koje ste</h1>

      <section className="selectservice__options">

        <div className="selectservice__colOne">
          <div className="selectservice__box">
            <input type="checkbox" id="zamjenaulja" name="zamjenaulja"></input>
            <label for="peuzamjenauljageot">Zamjena ulja i filtera (500 kn)</label>
          </div>

          <div className="selectservice__box">
            <input type="checkbox" id="servisklime" name="servisklime"></input>
            <label for="servisklime">Servis klima uređaja (299 kn)</label>
          </div>

          <div className="selectservice__box">
            <input type="checkbox" id="promjenapakni" name="promjenapakni"></input>
            <label for="promjenapakni">Promjena pakni (450 kn)</label>
          </div>
        </div>

        <div className="selectservice__colTwo">
          <div className="selectservice__box">
            <input type="checkbox" id="balansguma" name="balansguma"></input>
            <label for="balansguma">Balansiranje guma (50 kn)</label>
          </div>

          <div className="selectservice__box">
            <input type="checkbox" id="promjenaguma" name="promjenaguma"></input>
            <label for="promjenaguma">Promjena guma (100 kn)</label>
          </div>

          <div className="selectservice__box">
            <input type="checkbox" id="kocniceulje" name="kocniceulje"></input>
            <label for="kocniceulje">Zamjena ulja u kočnicama (229 kn)</label>
          </div>
        </div>

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
          <h1><strong>658,00 kn</strong></h1>
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
