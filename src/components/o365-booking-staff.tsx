import { makeStyles, shorthands,Button} from '@fluentui/react-components';
import { mergeStyles } from '@uifabric/styling';
import { Key, useCallback, useEffect, useState } from 'react';
import ServiceItem from './o365-booking-serviceItem';
import { getJSONStorage } from '../utils/setItemStorage';
import { getBookingServices } from '../service/BookingServices';
import { bookingServiceData } from '../constants/res';
import { formGetDurationInSeconds } from '../utils/getDurationAndCurrency';
const useStyles = makeStyles({
    title: {
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
        height:'80px'
    },
    labelRight:{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor:'#eaeaea',
        width:'46%',
        marginLeft:'4%',
        height:'80px'
    },

  });

interface props {
    selectStaff: (staff: any) => void;
    service:any;
}

const Staffs:React.FC<props> = ({selectStaff,service}) => {
    const styles = useStyles();
    const labelLeftClass = mergeStyles('ms-Grid-col ms-lg2', styles.labelLeft);
    const labelRightClass = mergeStyles('ms-Grid-col ms-lg6', styles.labelRight);
    const [loading, setLoading] = useState(true);
    const [staff, setStaff] = useState<any>();
    const [staffs, setStaffs] = useState<any[]>([]);
    const [services, setServices] = useState([]);
    // const services = bookingServiceData;
    useEffect(() => {
        let myStaffs = getJSONStorage('staffMembers');    
        const filterMembers = myStaffs.filter((staff:any) => {
            if (service.staffMemberIds.includes(staff?.id)) {
              return staff;
            }
        });            
        let currentStaffs = [{id: 'anyone', displayName: 'Anyone'},...filterMembers] 
        setStaffs(currentStaffs);
    }, [])

    const onSelectStaff = (staff: any) => {
        selectStaff(staff);
        setStaff(staff);
    }

    return(
        <>
            <div>
                <div className={styles.titleArea}>
                   <h1 id='serviceTitle' className={styles.title}>{(staff && staff?.displayName) ? staff?.displayName:`Select staff`}</h1>

                    <div className="ms-Grid" >
                        <div className="ms-Grid-row">
                            {staffs && staffs.length > 0 && staffs?.map((staff: any, index: number) => 
                             <div key={staff?.id} className={`${ index % 2 === 0? labelLeftClass: labelRightClass}`} onClick={e => {
                                e.preventDefault();
                                onSelectStaff(staff);
                            }}>
                                 <ServiceItem service={staff}/>
                            </div>
                        )}
                        </div>
                    </div>
                    
                </div>                
            </div>
        </>
    );
}

export default Staffs;