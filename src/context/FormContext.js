import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [formData, setFormData] = useState({
    vehicleSelected: "",
    services: ["Zamjena ulja", "Servis klime"],
    fullName: "Renato Pavlić",
    email: "renato@reno.hr",
    phoneNumber: "091555555",
    notes: "Krešti mi zvučnik kad prođem ležeće policajce sa 200kmh"
  });

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {props.children}
    </FormContext.Provider>
  );
}