
import * as React from 'react';
import { makeStyles, shorthands,Link,Divider  } from '@fluentui/react-components';

const useStyles = makeStyles({
    footerSection:{
        display: 'block',
        color: '#c6c6c6',
        backgroundColor: '#303030',
        ...shorthands.padding('24px','80px','24px','80px'),
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'center',
    },
   hidden:{display: 'none'},
   divider:{...shorthands.margin('0px','3px','0px','3px')},
   linkText:{color:'inherit'},
   seperator:{...shorthands.borderWidth('1px'), ...shorthands.borderStyle('solid'), ...shorthands.margin('32px')},
   icon:{content: "\e32a",width: '32px', minHeight: '32px',height: '32px', lineHeight: '32px', fontSize: '32px',
        selectors: {
            ':before': {
                content: "\e32a",
                display: 'inline-block',
                fontFamily: "WF-Office365Icons",
                lineHeight: '1',
                color: 'inherit',
            }}
        }
  });

  function Footer() {
    const styles = useStyles();
  
    return (
        <div className={styles.footerSection}>
            <p>
                <span>
                    <span className={styles.hidden}>Business Address</span>
                    Pet Hospital
                </span>
                <span className={styles.divider}> | </span>
                <span className="nowrap">
                    <span className={styles.hidden}>Business Phone</span>
                    1234567899
                </span>
                <span className={styles.divider}> | </span>
                <Link href="http://wpintegrate.com/" className={styles.linkText} target="_blank" inline> http://wpintegrate.com/ </Link>
                <br />
                <Link href="http://www.termsandconditions.com/" className={styles.linkText} target="_blank" inline> Terms and Conditions </Link>
                <span className={styles.divider}> | </span>
                <Link href="http://www.privacypolicy.com/" className={styles.linkText} target="_blank" inline> Privacy Policies </Link>
            </p>
            <Divider appearance="strong" className={styles.seperator}></Divider>
            <p><span  className={styles.icon}></span></p>
        </div>
      );
  };

  export default Footer;