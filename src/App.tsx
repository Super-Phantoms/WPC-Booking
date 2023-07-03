import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import Header from './components/o365-booking-header';
import Footer from './components/o365-booking-footer';
import Services from './components/o365-booking-services';
import Staffs from './components/o365-booking-staff';
import TimeArea from './components/o365-booking-time';
import Form from './components/o365-booking-form';
import { makeStyles,Button } from '@fluentui/react-components';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { initialize, setSelectedServiceCustomQuestions } from './storage/book';
import { Label, Pivot, PivotItem } from '@fluentui/react';
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

function App(props: any) {
  const classes = useMainStyles();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState('');
  const [staff, setStaff] = useState('');
  const [slot, setSlot] = useState('');
  const [date, setDate] = useState('');
  const [selectedKey, setSelectedKey] = React.useState(0);
  const selectService = (service: any) => {
    setService(service);
    
    setSelectedServiceCustomQuestions(service?.id);
  }
  const selectStaff = (staff:any) =>{
    setStaff(staff);
  }
  const selectSlot = (slot:any) =>{
    setSlot(slot);
  }
  const selectDate = (date:any) =>{
    setDate(date);
  }
  
  const onButtonClick = () => {
    if(selectedKey == 0){     
      if(service.length == 0){
        alert('please select any service!');
        return;
      }     
    }
    else if(selectedKey == 1){
      if(staff.length == 0){
        alert('please select any staff!');
        return;
      }
    }
    else if(selectedKey == 2){
      console.log(date);
      console.log(slot);
      if(slot.length == 0 || date.length == 0){
        alert('please select date and slot !');
        return;
      }
    }
    setSelectedKey((selectedKey + 1) % 4);
  };
  const handleLinkClick = (item?: PivotItem) =>{
    const itemKey = Number(item?.props.itemKey);
    if(itemKey < selectedKey){
      setSelectedKey(itemKey);
      
      if(itemKey == 0){
        setService('');
        setStaff('');
      }
      else if(itemKey ==1){
        setStaff('');
      }
      else if(itemKey == 2){
        setSlot('');
        setDate('');
      }
    }
  }

  useEffect(() => {
    initialize();
    setLoading(false);
  }, [])


  return (
    <div className="App">
      <div className={classes.root}>
        <Header />
        {/* {loading && <div>
          <p> loading... </p>
        </div>}
        {!loading && 
        <>
          <Services selectService={selectService}/>
          <TimeArea service={service}/>
          <Form />
        </>} */}
        <Pivot aria-label="Override Selected Item Pivot Example" selectedKey={String(selectedKey)} onLinkClick={handleLinkClick}>
          <PivotItem headerText="Services" itemKey="0">
            {loading && <div>
                <p> loading... </p>
              </div>
            }
            {!loading &&
              <Services selectService={selectService} />
            }
          </PivotItem>
          <PivotItem headerText="Staffs" itemKey="1">
            <Staffs selectStaff={selectStaff} service={service}/>
          </PivotItem>
          <PivotItem headerText="Times" itemKey="2">
            <TimeArea service={service} selectSlot={selectSlot} selectDate={selectDate}/>
          </PivotItem>
          <PivotItem headerText="Form" itemKey="3">
            <Form />
          </PivotItem>
        </Pivot>
        {selectedKey != 3 && <Button onClick={onButtonClick}>Select next item</Button>}        
        <Footer/>
      </div>
    </div>
  );
}

export default App;