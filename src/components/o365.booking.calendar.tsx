import { makeStyles, shorthands,typographyStyles,Label  } from '@fluentui/react-components';

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
    }
  });

function Calendar(){
    const styles = useStyles();
    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    <h1 id='timeTitle' className={styles.title}>Select time</h1>
                </div>                
            </div>
        </>
    );
}

export default Calendar;