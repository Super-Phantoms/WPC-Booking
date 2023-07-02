import { setJSONStorage, getJSONStorage, getStringStorage } from '../utils/setItemStorage';

export async function selectedStaffMember(selectStaffId: string) {
    console.log("selectedStaffMember", selectStaffId);
    if(selectStaffId === 'anyone') {
      // all booking slots are selected
      return;
    };

    if(selectStaffId !== 'anyone') {
      // fetch selected staff
      // fetch calendarView 
      setJSONStorage( 'selectedStaff',getJSONStorage('staffMembers').filter((staff:any) => staff?.id === selectStaffId));
      console.log('this.selected date', getStringStorage('selectDate'));
    }
  }

  