import { makeStyles, shorthands,typographyStyles,Label,Input } from '@fluentui/react-components';

const useStyles = makeStyles({
    title: {        
        fontSize:'18px',
        fontFamily: '"WF-Segoe-UI-Light", "Segoe UI Light", "Segoe WP Light", "Segoe UI", Tahoma, Arial, Sans-Serif',
        fontWeight: 'normal',
        opacity: '0.9',
        display: 'block',     
        ...shorthands.margin('6px','20px','36px','20px'),   
        
    },
    titleArea:{
        ...shorthands.padding('16px', '0px', '16px','0px'),
        boxShadow: '0 -2px 6px 0 rgba(0, 0, 0, 0.1)',
        marginBottom:'30px'
    },
    inputField:{
        fontSize:'18px',
        width:'90%',
        ...shorthands.margin('20px','50px','0px','50px')
    },
    label:{
        fontSize:'18px',
        width:'80%',
        marginRight:'50px',
        textAlign:'left'
    }
  });

function Form(){
    const styles = useStyles();
    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    <h1 id='formTitle' className={styles.title}>Add your details</h1>  
                    <div className="ms-Grid" >
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-lg6">
                                <div className="ms-Grid-row">
                                    <Input id="name" appearance="underline" placeholder="Name*" className={styles.inputField}/>
                                </div>
                                <div className="ms-Grid-row">
                                    <Input id="email" appearance="underline" placeholder="Email*" className={styles.inputField}/>
                                </div>
                                <div className="ms-Grid-row">
                                    <Input id="address" appearance="underline" placeholder="Address(optional)" className={styles.inputField}/>
                                </div>
                                <div className="ms-Grid-row">
                                    <Input id="phone" appearance="underline" placeholder="Phone number(optional)" className={styles.inputField}/>
                                </div>
                            </div>                    
                            <div className="ms-Grid-col ms-lg6">
                                <div className="ms-Grid-row">
                                    <Label  className={styles.label}> Please let us know if you have any special requests. Thank you.</Label>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>                
                
            </div>
        </>
    );
}

export default Form;