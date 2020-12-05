import React, { useState } from "react";
import Button from '@material-ui/core/Button';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import UserForm from "./components/UserForm/UserForm";

import './App.css';
import { FormProvider } from "./context/FormContext";

// Material UI custom styling for Modal
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "80vw",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <main>
        <h1>Konfigurator servisa</h1>
        <Button 
        variant="contained" 
        color="primary"
        onClick={() => setOpen(true)}>Pokreni Konfigurator
        </Button>
        <p>Izračunajte trošak servisa</p>
        <Modal
          id="modal"
          open={open}
        onClose={ () => setOpen(false)}>
          <div style={modalStyle} className={classes.paper}>
            <FormProvider>
              <UserForm />
            </FormProvider>
          </div>
        </Modal>
      </main>
    
    </div>
  );
}

export default App;
