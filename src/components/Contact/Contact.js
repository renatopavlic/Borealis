import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { TextareaAutosize } from '@material-ui/core';

import "./Contact.css";
import NavigationBtn from '../NavigationBtn/NavigationBtn';
import { FormContext } from '../../context/FormContext';

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
  const [formData, setFormData] = useContext(FormContext)


  const addContactInfo = e => {
    e.preventDefault();
    /* setFormData(prevData => [{...prevData}, {fullName: fullName, email: email, phoneNumber: phoneNumber, notes: notes}]) */

    setFormData( data => {
      return {...data, fullName: fullName, email: email, phoneNumber: phoneNumber, notes: notes}
    })
  }

  

  return (
    <div className="contact">
      <h1 className="contact__title">Korak 3. Vaši kontakt podaci</h1>

      <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      id="outlined-basic" 
      label="Ime i prezime" 
      variant="outlined"
      onChange={ e => setFullName(e.target.value)}
      required />
      <TextField 
      id="outlined-basic"
       label="Email adresa"
        variant="outlined"
        type="email"
        onChange={e => setEmail(e.target.value)}
        required />
      <TextField 
      id="outlined-basic"
      type="text"
       label="Broj telefona"
        variant="outlined"
        onChange={e => setPhoneNumber(e.target.value)}
        required />
      <TextareaAutosize 
      aria-label="minimum height" 
      rowsMin={7} placeholder="Napomena (opcionalno)" 
      className="contact__formTextArea"
      onChange={e => setNotes(e.target.value)}
      />
      <button onClick={addContactInfo}>Probaj, sretno</button>
    </form>

    <NavigationBtn
            prevPage={prevPage}
            nextPage={nextPage} />
    </div>
  )
}

export default Contact;
