import React, { useState } from 'react';

import NavigationBtn from "../NavigationBtn/NavigationBtn"

import "./SelectVehicle.css";

function SelectVehicle({ nextPage, prevPage }) {

  const [itemChecked, setItemChecked] = useState(false);

  console.log("item checked? ", itemChecked)
  return (
    <div className="selectvehicle">
      <h1 className="selectvehicle__title">Korak 1. Odaberite proizvođača vašeg vozila</h1>
      <section className="selectvehicle__options">
        <form className="selectvehicle__form">

          <div className="selectvehicle__box">
          <input type="radio" id="peugeot" name="peugeot"></input>
          <label for="peugeot">Peugeot</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="volkswagen" name="volkswagen"></input>
          <label for="volkswagen">Volkswagen</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="citroen" name="citroen"></input>
          <label for="citroen">Citroen</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="audi" name="audi"></input>
          <label for="audi">Audi</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="bmw" name="bmw"></input>
          <label for="bmw">Bmw</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="seat" name="seat"></input>
          <label for="seat">Seat</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="alfaromeo" name="alfaromeo"></input>
          <label for="alfaromeo">Alfa Romeo</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="kia" name="kia"></input>
          <label for="kia">Kia</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="hyundai" name="hyundai"></input>
          <label for="hyundai">Hyundai</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="honda" name="honda"></input>
          <label for="honda">Honda</label>
          </div>

          <div className="selectvehicle__box">
          <input type="radio" id="toyota" name="toyota"></input>
          <label for="toyota">Toyota</label>
          </div>
          
        </form>

      </section>

      <NavigationBtn
            prevPage={prevPage}
            nextPage={nextPage} />
      
    </div>
  )
}

export default SelectVehicle;
