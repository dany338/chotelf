import React from 'react'
import {Box, Link} from '@material-ui/core'
import pageStyles from './styles/page404Styles'
import { utilsAtom } from '../../atoms';
import { useAtom } from 'jotai'

const Page404 = ({location}) => {
  const styles = pageStyles()
  const [, setLoading] = useAtom(utilsAtom.loading)

  React.useEffect(() => {
    setLoading({show: false, opacity: 0.7})
    return () => {}
    //eslint-disable-next-line
  }, []);

  return <Box className={styles.container}>
    <img
      alt='Error 404'
      className={styles.img}
      src={require('../../assets/images/sad.svg')}
    />
    <p className={styles.text}>
      We have not found the page you are looking for <br/><br/><code>{location.pathname}</code><br/><br/>
      <b>ERROR: </b>404
    </p>
    <Link href='/' className={styles.button}>
      Get me out of here
    </Link>
  </Box>
}

export default Page404;
