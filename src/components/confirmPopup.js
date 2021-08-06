import React from 'react'
import pageStyles from './styles/confirmStyles'
import Box from '@material-ui/core/Box'
import { utilsAtom } from '../atoms'
import { useAtom } from 'jotai'

const ConfirmPopup = () => {
  const styles = pageStyles();
  const [confirm, setConfirm] = useAtom(utilsAtom.confirm)

  const onAccept= () => {
    setConfirm({show: false, data: {}})
    confirm.data.onAccept()
  }

  const onClose = () => setConfirm({show: false, data: {}})

  // Handle the loading state
  if (confirm.show) {
    return <Box className={styles.container}>
      <Box className={styles.contConfirm}>
        <img
          alt='close'
          src={require('../assets/icons/close.svg')}
          onClick={onClose}
          className={styles.iconClose}
        />
        <span
          role='img'
          aria-label='emoji'
          className={styles.emoji}
        >
          {confirm?.data?.icon || '🤔'}
        </span>
        <p className={styles.title}>
          {confirm?.data?.title}
        </p>
        <p className={styles.text}>
          {confirm?.data?.text}
        </p>
        <Box className={styles.rowButtons}>
          {confirm?.data?.onAccept ? <Box
            className={styles.btAccept}
            onClick={onAccept}
          >
            {confirm?.data?.accept}
          </Box> : null}
          <Box
            className={styles.btCancel}
            onClick={onClose}
          >
            {confirm?.data?.cancel || 'Cancel'}
          </Box>
        </Box>
      </Box>
    </Box>;
  } else {
    return null;
  }
};

export default ConfirmPopup