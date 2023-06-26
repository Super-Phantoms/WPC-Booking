import { makeStyles, shorthands} from '@fluentui/react-components';
import { Icon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@uifabric/styling';

const useStyles = makeStyles({
   
    serviceContent:{
        textAlign:'left',
    },
    serviceIcon:{
        marginTop:'15px',
        fontSize:'28px'
    },
    serviceMainName:{
        marginTop:'10px',
        marginBottom:'10px'
    }
  });


function ServiceItem(){
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
    const serviceContentClass = mergeStyles('ms-Grid-col ms-lg8', styles.serviceContent);
    const serviceIconClass = mergeStyles('ms-Grid-col ms-lg2', styles.serviceIcon);
    const serviceMainName = mergeStyles('ms-Grid-row', styles.serviceMainName);

    return(
        <>
         <div className={hoverStyle}>
            <div className='ms-Grid-row'>
                <div className='ms-Grid-col ms-lg2'></div>
                <div className={serviceContentClass}>
                    <div className={serviceMainName}>
                        <span >ServiceName</span>
                    </div>
                    <div className={serviceMainName}>
                        <span>ServiceName</span>
                    </div>
                    <div className={serviceMainName}>
                        <span>ServiceName</span>
                    </div>
                </div>
                <div className={serviceIconClass}>
                    <Icon iconName="InfoSolid" />
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceItem;