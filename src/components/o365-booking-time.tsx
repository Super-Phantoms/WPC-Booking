
import React, { useState, useEffect,useRef  } from "react";
import { makeStyles, shorthands,Select} from '@fluentui/react-components';

// import { fluent  , provideFluentDesignSystem } from '@fluentui/web-components';


import { Calendar,ICalendarStyles ,mergeStyles } from '@fluentui/react';
import Slot from './o365-booking-slot';
import { getStaffMembers, getTimeSlots } from '../service/BookingServices';
import { getJSONStorage, getStringStorage, setJSONStorage } from '../utils/setItemStorage';
import { getDateOnServiceSelect } from "../storage/book";
import { staffWorkingHoursSlot } from "../utils/hourSlots";

// provideFluentDesignSystem().register(fluentCalendar());
  

const useStyles = makeStyles({
    title: {    
        
        fontSize:'18px',
        fontFamily: '"WF-Segoe-UI-Light", "Segoe UI Light", "Segoe WP Light", "Segoe UI", Tahoma, Arial, Sans-Serif',
        fontWeight: 'normal',
        opacity: '0.9',
        display: 'block',
    },
    titleArea:{
        ...shorthands.padding('16px', '0px', '16px','0px'),
        boxShadow: '0 -2px 6px 0 rgba(0, 0, 0, 0.1)'
    },
    staffSelectTitle:{
        textAlign:'left',
        fontSize:'18px',
        marginTop:'20px'
    },
    staffSelect:{
        marginTop:'20px',
        width:'80%'    
    },
    calendar:{
        textSize:'20px',
        fontSize:'20px',
    }
   
  });

//   const customCalendarStyles: Partial<ICalendarStyles> = {
//         dayWrapper: { fontSize: '14px' },
//         year: { fontSize: '14px' },
//         weekText: { fontSize: '14px' }
//   };

  
interface props {
    service: any
}

const TimeArea:React.FC<props> = ({service}) => {

    const styles = useStyles();
    const staffSelectTitle = mergeStyles('ms-Grid-row', styles.staffSelectTitle);

    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);
    const [staffs, setStaffs] = useState<any[]>([]);
    const [staff, setStaf] = useState<any>(null);
    const [timeslots, setTimeSlots] = useState<any>();
    const [restrictDates, setRestricDates] = useState<any[]>([]);
    const handleSelectDate = (date:any) => {
        debugger;
        setSelectedDate(date);
        console.log('this is select date....')
        debugger;
        console.log(date);
        // setSelectedDate(date.toISOString());
    };

    const calendarRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        const calendarElement = calendarRef.current;
        const buttons = calendarElement?.querySelectorAll('button');
            buttons?.forEach((button:any) => {
            button.classList.add('button-font-customized');
        });
        const d1 = new Date();
        d1.setDate(3);
        const d2 = new Date();
        d2.setDate(5);
        setRestricDates([d1, d2]);
    }, [])
    
    useEffect(() => {
        async function initDataForService() {
            let myStaffs = getJSONStorage('staffMembers');
            console.log('this is staffs')
            console.log(myStaffs)

            const filterMembers = myStaffs.filter((staff:any) => {
                if (service.staffMemberIds.includes(staff?.id)) {
                  return staff;
                }
            });
            let currentStaffs = [{id: 'anyone', displayName: 'Anyone'},...filterMembers] 
            setStaffs(currentStaffs);

            const minLeadDate = getStringStorage('servicesSelectedDate[service.id]');
            if(minLeadDate) {
                getDateOnServiceSelect(minLeadDate);
            // this.getServiceCalenderView();
            }
        }
        if(service) {
            initDataForService();
        }
    }, [service])

    const selectStaff = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        debugger;
        setStaf(e.target.value);

        const slots = await getTimeSlots(staff);
        
        setTimeSlots(slots);

        // set availibility calendar and get timeslots by staff...
        staffWorkingHoursSlot();
    }

    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    <h1 id='timeTitle' className={styles.title}>Select time</h1>
                    <div className="ms-Grid" >
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-lg1"></div>
                            <div className="ms-Grid-col ms-lg5" >
                                <Calendar showMonthPickerAsOverlay={true}
                                        showGoToToday={false} 
                                        minDate={today}
                                        onSelectDate={handleSelectDate}
                                        today={selectedDate}
                                        value={selectedDate}
                                        // styles={customCalendarStyles}
                                        id="calendar"
                                        restrictedDates={restrictDates}
                                        ref={calendarRef}
                                        // size="'large'"
                                        className={styles.calendar}                                       
                                        />
                                {/* <fluent-calendar></fluent-calendar> */}
                            </div>
                            <div className="ms-Grid-col ms-lg6">
                                <div className={staffSelectTitle}>
                                
                                    <span> Select staff (optional)</span>

                                    <Select appearance="outline" className={styles.staffSelect} value={staff} onChange={(e) => {
                                        selectStaff(e);
                                    }}>
                                        {staffs && staffs.length > 0 && staffs.map((staff: any) => (
                                            <option value={staff?.id}>{staff?.displayName}</option>)
                                        )}
                                        {(!staff || staffs.length === 0) &&
                                            <option value=""></option>
                                        }
                                    </Select>
                                </div>
                               <Slot  />
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
        </>
    );
}

export default TimeArea;