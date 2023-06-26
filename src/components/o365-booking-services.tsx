import { makeStyles, shorthands} from '@fluentui/react-components';
import { Icon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@uifabric/styling';
import ServiceItem from './o365-booking-serviceItem';

const useStyles = makeStyles({
    title: {
        
        fontSize:'18px',
        fontFamily: '"WF-Segoe-UI-Light", "Segoe UI Light", "Segoe WP Light", "Segoe UI", Tahoma, Arial, Sans-Serif',
        fontWeight: 'normal',
        opacity: '0.9',
        display: 'block',        
        marginBottom:'30px'
    },
    titleArea:{
        ...shorthands.padding('16px', '0px', '16px','0px'),
        boxShadow: '0 -2px 6px 0 rgba(0, 0, 0, 0.1)'
    },
    labelLeft:{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor:'#eaeaea',
        marginRight:'4%',
        width:'46%',
        height:'100px',
        paddingLeft:'0px',
        paddingRight:'0px',
        fontSize:'18px'
    },
    labelRight:{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor:'#eaeaea',
        width:'46%',
        marginLeft:'4%',
        height:'100px',
        paddingLeft:'0px',
        paddingRight:'0px'
    },   
  });

function Services(){
    const styles = useStyles();
    const labelLeftClass = mergeStyles('ms-Grid-col ms-lg6', styles.labelLeft);
    const labelRightClass = mergeStyles('ms-Grid-col ms-lg6', styles.labelRight);
   

 
    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    <h1 id='serviceTitle' className={styles.title}>Select service</h1>
                    <div className="ms-Grid" >
                        <div className="ms-Grid-row">                            
                            <div className={labelLeftClass}>
                               <ServiceItem />
                            </div>
                            <div className={labelRightClass}>
                                <ServiceItem />
                            </div>
                            <div className={labelLeftClass}>
                                <ServiceItem />
                            </div>
                            <div className={labelRightClass}>
                                <ServiceItem />
                            </div>
                        </div>
                    </div>
                    
                </div>                
            </div>
        </>
    );
}

export default Services;