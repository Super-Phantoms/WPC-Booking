
import * as React from 'react';
import { makeStyles, typographyStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
    headerSection:{
        display: 'block',
        color: '#FFFFFF',
        backgroundColor: '#536076',
        height:'100px',
        paddingTop: '16px',
        paddingRight: '0px',
        paddingBottom: '16px',
        paddingLeft: '0px'
    },
    headerTitle:{
        marginTop: '20px',
        marginRight: '28px',
        marginBottom: '20px',
        marginLeft: '28px'
    }
  });

  function Header() {
    const styles = useStyles();
  
    return (
        <div className={styles.headerSection}>
          <h1 className={styles.headerTitle}>Pet Hospital</h1>
        </div>
      );
  };

  export default Header;