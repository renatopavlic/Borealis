import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { TextareaAutosize } from '@material-ui/core';

import "./Contact.css";
import NavigationBtn from '../NavigationBtn/NavigationBtn';

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

  return (
    <div className="contact">
      <h1 className="contact__title">Korak 3. Vaši kontakt podaci</h1>

      <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      id="outlined-basic" 
      label="Ime i prezime" 
      variant="outlined"
      required />
      <TextField 
      id="outlined-basic"
       label="Email adresa"
        variant="outlined"
        type="email"
        required />
      <TextField 
      id="outlined-basic"
       label="Broj telefona"
        variant="outlined"
        required />
      <TextareaAutosize 
      aria-label="minimum height" 
      rowsMin={7} placeholder="Napomena (opcionalno)" 
      className="contact__formTextArea"/>
    </form>

    <NavigationBtn
            prevPage={prevPage}
            nextPage={nextPage} />
    </div>
  )
}

export default Contact;
