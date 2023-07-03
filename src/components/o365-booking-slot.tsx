import {  useState } from 'react';
import { makeStyles, } from '@fluentui/react-components';
import { mergeStyles } from '@uifabric/styling';

const useStyles = makeStyles({
    
    slotArea:{
        marginTop:'20px',
        width:'80%' ,
        height:'300px',
        overflowY: 'scroll'
    },
    slot:{
        marginTop:'20px'
    }

  });
interface props {
    timeSlots: any[];
    selectSlot: (slot: any) => void;
    setTitle: (slot: any) => void;
}

const Slot:React.FC<props> = ({timeSlots,selectSlot,setTitle}) => {
    const styles = useStyles();
    const [slot,setSlot]= useState('');
    const hoverStyle = mergeStyles({
        selectors: {
          ':hover': {
            backgroundColor: 'lightgray',
            cursor: 'pointer',
          },
        },
        height:'inherit'
      });
    const slotArea = mergeStyles('ms-Grid-row', styles.slotArea);
    const slotItem = mergeStyles('ms-Grid-col ms-lg4', styles.slot);
    const handleSlot = (e:any)=>{
        selectSlot(e.target.textContent);
        setTitle(e.target.textContent);
        setSlot(e.target.textContent);
        
    }
    return(
        <>
             <div className={slotArea}>      
                { timeSlots && timeSlots.length > 0 && timeSlots.map((item:any)=>(
                    <div className={slotItem} onClick={(e)=>handleSlot(e)}>
                        <div className={hoverStyle}>
                            {item}
                        </div>
                    </div>
                ))}
               
            </div>
        </>
    )
}

export default Slot;