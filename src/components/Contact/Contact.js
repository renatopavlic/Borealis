import React, { useContext, useEffect, useState } from 'react';

import { FormContext } from '../../context/FormContext';

import { makeStyles } from '@material-ui/core/styles';
import { Button, TextareaAutosize } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: "flex",
      flexDirection: "column"
    },
  },
}));

function Contact({nextPage, prevPage}) {

  const classes = useStyles();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [formData, setFormData] = useContext(FormContext);

  const addContactInfo = () => {
    // Save contact information to context
    setFormData( data => {
      return {...data, fullName: fullName, email: email, phoneNumber: phoneNumber, notes: notes}
    })
  }

  useEffect(() => {
    // Save all input into variable
    setEmail(formData.email);
    setFullName(formData.fullName);
    setPhoneNumber(formData.phoneNumber);
    setNotes(formData.notes);

  }, [] );
  

  return (
    <div className="contact">
      <h1 className="contact__title">Korak 3. Vaši kontakt podaci</h1>

      <div className="contact__form">
        <form className={classes.root} noValidate autoComplete="off">     
          <TextField 
            id="outlined-basic" 
            label="Ime i prezime"
            value={fullName} 
            variant="outlined"
            onChange={ e => setFullName(e.target.value)}
            required />

          <TextField 
            id="outlined-basic"
            label="Email adresa"
            variant="outlined"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            required />

          <TextField 
            id="outlined-basic"
            type="text"
            label="Broj telefona"
            value={phoneNumber}
            variant="outlined"
            onChange={e => setPhoneNumber(e.target.value)}
            required />

          <TextareaAutosize 
            aria-label="minimum height" 
            rowsMin={7} placeholder="Napomena (opcionalno)" 
            className="contact__formTextArea"
            value={notes}
            onChange={e => setNotes(e.target.value)} />

        </form>
      </div>

      <div className="contact__navigation">
        <Button variant="contained" onClick={prevPage}>Natrag</Button>
        {(fullName.length > 0 && email.length > 0 && phoneNumber.length > 8) ? (<Button variant="contained" color="primary" onClick={() => {
          addContactInfo();
          nextPage()}}>Dalje</Button>) : ("")} 
      </div>
      
    </div>
  )
}

export default Contact;
