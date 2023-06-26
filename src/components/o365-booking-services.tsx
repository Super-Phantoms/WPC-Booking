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

function Services(){
    const styles = useStyles();
    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    <h1 id='serviceTitle' className={styles.title}>Select service</h1>
                </div>                
            </div>
        </>
    );
}

export default Services;