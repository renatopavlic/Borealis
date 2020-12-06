import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [formData, setFormData] = useState({
    vehicleSelected: "",
    servicesSelected: [],
    finalPrice: 0,
    fullName: "",
    email: "",
    phoneNumber: "",
    notes: "h"
  });

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {props.children}
    </FormContext.Provider>
  );
}