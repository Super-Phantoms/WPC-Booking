
import { makeStyles, } from '@fluentui/react-components';
import { mergeStyles } from '@uifabric/styling';

const useStyles = makeStyles({
    
    slotArea:{
        marginTop:'20px',
        width:'80%' 
    },
    slot:{
        marginTop:'20px'
    }

  });
interface props {
    timeSlots: any[]
}

const Slot:React.FC<props> = ({timeSlots}) => {
    const styles = useStyles();
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
    return(
        <>
             <div className={slotArea}>      
                { timeSlots && timeSlots.length > 0 && timeSlots.map((item:any)=>(
                    <div className={slotItem}>
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