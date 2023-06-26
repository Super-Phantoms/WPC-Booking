import React, { useCallback, useEffect, useState } from "react";
import { makeStyles, shorthands} from '@fluentui/react-components';

import { Calendar,ThemeProvider } from '@fluentui/react';

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

  });



function TimeArea(){
   
    const styles = useStyles();

    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    <h1 id='timeTitle' className={styles.title}>Select time</h1>
                    <div className="ms-Grid" >
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-lg6">
                                <Calendar showMonthPickerAsOverlay={true}
                                        showGoToToday={false}                                             
                                        />
                            </div>                    
                            <div className="ms-Grid-col ms-lg6">
                                <div className="ms-Grid-row">
                                    a
                                </div>
                                <div className="ms-Grid-row">
                                    a
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>                
            </div>
        </>
    );
}

export default TimeArea;