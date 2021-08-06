import React from 'react'
import pageStyles from './styles/layoutStyles'
import { Box } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { userAtom, utilsAtom } from '../../atoms'
import { logOut } from '../../services/auth'
import { useAtom } from 'jotai'
import _ from 'lodash'

const Layout = ({children, history, Footer}) => {
  const styles = pageStyles()
  const routeName = history?.location?.pathname
  const [userInfo] = useAtom(userAtom.userInfo)
  const [, setConfirm] = useAtom(utilsAtom.confirm)
  const [, setLoading] = useAtom(utilsAtom.loading)
  const [, setAlerts] = useAtom(utilsAtom.alerts)
  const [, setResetAll] = useAtom(utilsAtom.resetAll)

  const onLogout = async () => {
    try {
      setLoading({opacity: 1, show: true})
      await logOut();
      setResetAll(true)
      history.push('/login')
    } catch (e) {
      setAlerts(ov => [...ov, {
        message:  _.get(e, 'message', 'Unknown error'),
        variant: 'error'
      }])
    }
  }

  const logout = () => {
    setConfirm({show: true, data: {
      title: 'Oh no, you are leaving...',
      text: 'Are you sure?',
      accept: 'Yes, log me out',
      cancel: 'Nah, just kidding',
      icon: '😢',
      onAccept: onLogout
    }})
  }

  const returnName = () => {
    const email = userInfo.email ? userInfo.email.split('@')[0] : '-'
    return userInfo?.username || userInfo?.name || email
  }

  const renderHeader = () => {
    if (routeName !== '/') {
      return <>
        <Box className={styles.hellName}>
          <span className={styles.hello}>
            Hello,
          </span>
          <span className={styles.username}>
            {returnName()}
          </span>
        </Box>
        <img
          src={require('../../assets/navigation/bell.svg')}
          className={styles.iconNotify}
          alt='Notify'
        />
        <Box 
          className={styles.contImgProfile}
          style={{
            backgroundImage: `url(${userInfo?.photoURL ? `"${userInfo?.photoURL}"` : require('../../assets/images/default_empty.png')})`
          }}
          onClick={logout}
        />
      </>
    } else {
      return <Box className={styles.flex}>
        <Box className={styles.row} style={{marginBottom: 12}}>
          <span className={styles.titleHd}>
            What would you  like to learn today?
          </span>
          <img
            src={require('../../assets/navigation/search.svg')}
            className={styles.iconNotify}
            alt='Search'
            style={{marginRight: 0, marginLeft: 16}}
          />
        </Box>
      </Box>
    }
  }

  React.useEffect(() => {
    return () => { }
  });

  return (
    <Box className={styles.container}>
      <Box className={styles.contBg}>
        <Box className={[styles.blueBg, routeName === '/' ? styles.colorGreen : ''].join(' ')} />
        <Box className={[styles.greenBg, routeName === '/' ? styles.noColor : ''].join(' ')} />
        <Box className={[styles.redBg, routeName === '/' ? styles.colorBlue : ''].join(' ')} />
        <Box className={styles.noise} />
        <Box className={styles.blur} />
      </Box>
      <Box className={styles.header}>
        {renderHeader()}
      </Box>
      <Box className={styles.contentDash}>
        {children}
      </Box>
    </Box>
  )
}

export default withRouter(Layout)
