
import { makeStyles, shorthands,Select} from '@fluentui/react-components';
// import { fluentCalendar, provideFluentDesignSystem } from '@fluentui/web-components';


import { Calendar } from '@fluentui/react';
import Slot from './o365-booking-slot';
import { mergeStyles } from '@fluentui/react';

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
   
  });

  


function TimeArea(){
   
    const styles = useStyles();
    const staffSelectTitle = mergeStyles('ms-Grid-row', styles.staffSelectTitle);
   
    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    <h1 id='timeTitle' className={styles.title}>Select time</h1>
                    <div className="ms-Grid" >
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-lg6">
                                {/* <Calendar showMonthPickerAsOverlay={true}
                                        showGoToToday={false} 
                                        // styles={getStyles}                                          
                                        /> */}
                                <fluent-calendar></fluent-calendar>
                            </div>                    
                            <div className="ms-Grid-col ms-lg6">
                                <div className={staffSelectTitle}>
                                
                                    <span> Select staff (optional)</span>
                                    <Select appearance="outline" className={styles.staffSelect} >
                                        <option>Red</option>
                                        <option>Green</option>
                                        <option>Blue</option>
                                    </Select>
                                </div>
                               <Slot />
                            </div>
                        </div>
                    </div>  
                </div>                
            </div>
        </>
    );
}

export default TimeArea;

