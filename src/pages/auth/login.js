import React from 'react'
import { Box, TextField } from '@material-ui/core'
import { verifyEmail } from '../../utils/validations'
import pageStyles from './styles/authStyles'
import {
  authChanged,
  login
} from '../../services/auth'
import { userAtom, utilsAtom } from '../../atoms';
import Icons from '../../utils/icons'
import returnErrors from '../../utils/errors'
import { useAtom } from 'jotai'
import { asyncLocalStorage } from '../../utils/localStorage';

const LoginPage = (props) => {
  const styles = pageStyles()
  const [, setLoading] = useAtom(utilsAtom.loading)
  const [, setAlerts] = useAtom(utilsAtom.alerts)
  const [, setUid] = useAtom(userAtom.uid)
  const [, setUserInfo] = useAtom(userAtom.userInfo)

  const [inputFocused, setInputFocused] = React.useState(null)
  const [firstLoad, setFirstLoad] = React.useState(null)
  const [dataUser, setDataUser] = React.useState(null)
  const [canLoad, setCanLoad] = React.useState(true)
  const [vc, setVc] = React.useState({
    showPassword: false,
    password: '',
    email: '',
  });

  const changeEye = () => {
    setVc(oldValues => ({
      ...oldValues,
      showPassword: !oldValues.showPassword
    }))
  }

  const goTo = (route) => {
    props.history.push(route)
  }

  const emailLoginCrmagents = async () => {
    try {
      setLoading((ov) => ({...ov, show: true}))
      const result = await login({ email: vc.email, password: vc.password})
      if(result) {
        setUid(result.refreshToken)
        setUserInfo(ov => ({...ov, ...result}))
        await asyncLocalStorage.setItem("token-crmagents", result.accessToken);
        goTo('/dashboard')
      }
    } catch (e) {
      setLoading((ov) => ({...ov, show: false}))
      returnErrors(`Login error: ${String(e)}`, setAlerts)
    }
  }

  const submitForm = () => {
    const { email, password } = vc;
    if (!email || !password) {
      setAlerts(ov => [...ov, {
        message: 'Fill all fields please',
        variant: 'error'
      }])
    } else if (verifyEmail(email)) {
      emailLoginCrmagents()
    } else {
      setAlerts(ov => [...ov, {
        message: 'Enter a valid email',
        variant: 'error'
      }])
    }
  }

  const changeState = name => event => {
    event.persist()
    let value = event.target.value
    if (name === 'email') {
      value = value.replace(/\s/g, '')
    }
    setVc(oldValues => ({
      ...oldValues,
      [name]: value
    }))
  }

  React.useEffect(() => {
    if (!dataUser) {
      setTimeout(() => {
        setLoading({show: false, opacity: 0.7})
        setCanLoad(false)
      }, 500);
    } else if (firstLoad === false && canLoad) {
      setFirstLoad(true)
      setCanLoad(false)
      if (dataUser) {
        setLoading({show: true, opacity: 0.7})
        goTo('/dashboard')
      } else {
        setLoading({show: false, opacity: 0.7})
      }
    }
    return () => {}
    //eslint-disable-next-line
  }, [dataUser]);

  React.useEffect(() => {
    (async() => {
      const token = await authChanged();
      if(token) {
        setDataUser(token)
      }
      setFirstLoad(false)
    })()
    return () => {}
    //eslint-disable-next-line
  }, []);

  return <Box className={styles.container}>
    <Box className={styles.bgFilter} />
    <Box className={styles.content}>
      <img
        src={require('../../assets/images/2-2.webp')}
        className={styles.logo}
        alt='CHOTEL'
      />
      <Box className={styles.welcome}>
        Hi Leads!
      </Box>
      <Box className={styles.lblWel}>
        Login with you account
      </Box>
      <Box className={styles.contInputs}>
        <Box className={[styles.contInput, inputFocused === 'email' ? 'focused' : ''].join(' ')}>
          <TextField
            label='Email'
            onChange={changeState('email')}
            value={vc.email}
            className={styles.input}
            inputProps={{
              id: "input-email"
            }}
            onFocus={() => setInputFocused('email')}
            onBlur={() => setInputFocused(null)}
          />
        </Box>
        <Box className={[styles.contInput, inputFocused === 'password' ? 'focused' : ''].join(' ')}>
          <TextField
            label='Password'
            onChange={changeState('password')}
            value={vc.password}
            className={styles.input}
            inputProps={{
              maxLength: 18,
              type: vc.showPassword ? 'text' : 'password',
              id: "input-password"
            }}
            onFocus={() => setInputFocused('password')}
            onBlur={() => setInputFocused(null)}
          />
          <Box onClick={changeEye} className={styles.eyeBt}>
            <img alt='eye' src={vc.showPassword ? Icons.eye : Icons.eyeOff} />
          </Box>
        </Box>
        <Box
          className={[styles.sendBt, !vc.email || !vc.password ? styles.disabledBtn : ''].join(' ')}
          onClick={submitForm}
          id="submit"
        >
          Login
        </Box>
      </Box>
      <Box />
    </Box>
  </Box>
}

export default LoginPage;
