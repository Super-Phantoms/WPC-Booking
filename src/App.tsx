import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/o365-booking-header';
import Footer from './components/o365-booking-footer';
import Services from './components/o365-booking-services';
import Calendar from './components/o365.booking.calendar';
import Form from './components/o365-booking-form';
import { makeStyles } from '@fluentui/react-components';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

const useMainStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    maxWidth: '1024px',    
    minWidth: '320px',
    marginTop: '0px',
    marginRight: 'auto',
    marginBottom: '0px',
    marginLeft: 'auto',
    textAlign: 'center',
    fontFamily: ' WF-Segoe-UI-Semilight, Segoe UI Semilight, Segoe WP Semilight, Segoe UI, Tahoma, Arial, Sans-Serif',
    color: '#333333'
  },
});

function App() {
  const classes = useMainStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <Header />
        <Services />
        <Calendar />
        <Form />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
