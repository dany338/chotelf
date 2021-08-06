import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles/alertStyles'
import { utilsAtom } from '../atoms';
import { useAtom } from 'jotai';
import HappyFace from '../assets/icons/happy-face.svg'
import SadFace from '../assets/icons/sad-face.svg'

const Alert = () => {
  const [alerts, setAlerts] = useAtom(utilsAtom.alerts)
  const styles = useStyles();
  const returnIcon = (item) => {
    if (item.variant === 'success') {
      return HappyFace
    } else if (item.variant === 'warning') {
      return SadFace
    }  else if (item.variant === 'error') {
      return SadFace
    } else {
      return HappyFace
    }
  }

  const closeItem = (index) => {
    let auxArr = [...alerts]
    if (document.getElementById('alert-item-' + index)?.classList) {
      document.getElementById('alert-item-' + index).classList.add(styles.pop)
      setTimeout(() => {
        if (document.getElementById('alert-item-' + index)?.classList) {
          document.getElementById('alert-item-' + index).classList.remove(styles.pop)
        }
        if (auxArr[index].handleClose) {
          auxArr[index].handleClose()
        }
        auxArr.splice(index, 1)
        setAlerts(auxArr)
      }, 250);
    }
  }

  React.useEffect(() => {
    let myTimeout = null
    if (alerts.length > 1) {
      closeItem(0)
    } else if (alerts.length > 0) {
      myTimeout = setTimeout(() =>{
        closeItem(0)
      }, 6000);
    }
    return () => {
      clearTimeout(myTimeout)
    }
    //eslint-disable-next-line
  }, [alerts])

  return alerts.length > 0 ? <Box className={styles.contAlerts}>
    {alerts.map((item, index) => <Box 
      className={[
        styles.container,
        styles[item.variant],
      ].join(' ')}
      key={'alert-compt-' + index}
      onClick={() => closeItem(index)}
      id={'alert-item-' + index}
    >
      <img
        alt='icon-alert'
        src={returnIcon(item)}
        className={styles.iconAlert}
      />
      <p className={styles.text}>
        {item.message}
      </p>
    </Box>)}
  </Box> : null
};

export default Alert