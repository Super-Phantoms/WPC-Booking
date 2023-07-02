
import React, { useState, useEffect,useRef  } from "react";
import { makeStyles, shorthands,Select} from '@fluentui/react-components';

// import { fluent  , provideFluentDesignSystem } from '@fluentui/web-components';


import { Calendar,DayOfWeek,ICalendarStyles ,mergeStyles } from '@fluentui/react';
import Slot from './o365-booking-slot';
import { getStaffMembers, getTimeSlots } from '../service/BookingServices';
import { getJSONStorage, getStringStorage, setJSONStorage } from '../utils/setItemStorage';
import { getDateOnServiceSelect } from "../storage/book";
import { getDaysInMonth,getRestDates,formGetDurationInSeconds,getSelectedDate } from "../utils/getDurationAndCurrency";
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
    const [timeslots, setTimeSlots] = useState<any[]>([]);
    const [restrictDates, setRestricDates] = useState<any[]>([]);
    const [timeTitle, setTimeTitle] = useState<any>();
   
    const handleSelectDate = (date:any) => {
        setSelectedDate(date);
        const options = { month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        if(timeTitle && timeTitle.includes('with')){            
            let title = timeTitle;
            title = title.replace(timeTitle.split('with')[0], formattedDate+' ');
            setTimeTitle(title);
        }
        else{
            setTimeTitle(formattedDate);
        }
        
    };

    const calendarRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        const calendarElement = calendarRef.current;
        const buttons = calendarElement?.querySelectorAll('button');
            buttons?.forEach((button:any) => {
            button.classList.add('button-font-customized');
        });

    }, [])
    
    useEffect(() => {
        async function initDataForService() {
            let myStaffs = getJSONStorage('staffMembers');    
            const filterMembers = myStaffs.filter((staff:any) => {
                if (service.staffMemberIds.includes(staff?.id)) {
                  return staff;
                }
            });            
            let currentStaffs = [{id: 'anyone', displayName: 'Anyone'},...filterMembers] 
            setStaffs(currentStaffs);

            initRestricDates();
            const minLeadDate = getStringStorage('servicesSelectedDate[service.id]');
            if(minLeadDate) {
                getDateOnServiceSelect(minLeadDate);
            }

           initSlots();
        }
        if(service) {
            initDataForService();
        }
    }, [service]);

    const initSlots = () =>{
        let defaultBusinessHours = getJSONStorage('defaultBusinessHours');  
        let date = getSelectedDate(new Date(selectedDate).getDay());
        const filterBusinessHours = defaultBusinessHours.filter((item:any)=>{
            if(item.day == date)
                return item;
        })
        
        if(filterBusinessHours && filterBusinessHours[0].timeSlots.length > 0){
            const startTime = filterBusinessHours[0].timeSlots[0].startTime;
            const endTime = filterBusinessHours[0].timeSlots[0].endTime;
            let timeSlotInterval = service.schedulingPolicy.timeSlotInterval;
            
            timeSlotInterval = formGetDurationInSeconds(timeSlotInterval);
            const dateObj = new Date(selectedDate);
            const convertedDate = dateObj.toISOString().split('T')[0];
            const startDateTime = new Date(`${convertedDate}T${startTime}`);
            const endDateTime = new Date(`${convertedDate}T${endTime}`);
            const timeArray = [];
            let currentTime = startDateTime;
            while (currentTime < endDateTime) {
                timeArray.push(currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
                currentTime.setMinutes(currentTime.getMinutes() + timeSlotInterval);
              }
            console.log(timeArray);
            setTimeSlots(timeArray);
        }
        
    }
    const initRestricDates = ()=>{
        const defaultBusinessDays = getJSONStorage('defaultBusinessHours'); 
        const restDays =  defaultBusinessDays.filter((workDay:any)=>{
            if(workDay.timeSlots.length < 1){
                return workDay;
            }
        });        
        const restDates = getRestDates(restDays);
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const daysInMonth = getDaysInMonth(year, month);
        let restricDates:any[] = [];
        for(let i=1; i<=daysInMonth; i++){
            const date = new Date(year,month-1,i).getDay();
            restDates.map((restDate:number)=>{
                if(restDate == date){
                    const d1 = new Date();
                    d1.setDate(new Date(year,month-1,i).getDate());
                    restricDates.push(d1);
                }
            })
        }
        setRestricDates(restricDates);
    }

    const selectStaff = async (e: any) => {
        // e.preventDefault();        
        
        setStaf(e.target.value);
        const selectedIndex = e.target.selectedIndex;
        if(timeTitle && timeTitle.includes('with')){            
            let title = timeTitle;
            title = title.replace(timeTitle.split('with')[1], ' '+ e.target.options[selectedIndex].text);
            setTimeTitle(title);
        }
        else{
            const title = timeTitle+" with "+ e.target.options[selectedIndex].text;
            setTimeTitle(title);
        }
       
        // const defaultDuration = formGetDurationInSeconds(service?.defaultDuration);
        // const slots = await getTimeSlots(staff);        
        // const filterSlots = slots.filter((slot:any)=>{
        //     if(slot && slot.id == staff){
        //         return slot;
        //     }
        // });

        // setTimeSlots(slots);


        // set availibility calendar and get timeslots by staff...
        // staffWorkingHoursSlot();
    }

    return(
        <>
            <div>
                <div className={styles.titleArea}>

                    <h1 id='timeTitle' className={styles.title}>{(timeTitle) ? timeTitle :`Select time`}</h1>
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
                                            <option key={staff?.id} value={staff?.id} >{staff?.displayName}</option>)
                                        )}
                                        {(!staff || staffs.length === 0) &&
                                            <option value=""></option>
                                        }
                                    </Select>
                                </div>
                               <Slot  timeSlots={timeslots}/>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
        </>
    );
}



export default TimeArea;