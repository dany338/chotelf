import React from 'react'
import Box from '@material-ui/core/Box';
import moment from 'moment';
import Layout from '../layout';
import pageStyles from './styles/dashboardStyles';
import { useAtom } from 'jotai';
import { utilsAtom } from '../../atoms';
import SearchRooms from '../../components/searchRooms';

const Lead = ({ history }) => {
  const styles = pageStyles();
  const [, setLoading] = useAtom(utilsAtom.loading);

  const setSession = () => {
    localStorage.setItem('visited-dashboard', moment().format('x'))
  }

  React.useEffect(() => {
    setSession();
    setLoading({show: false, opacity: 0.7})
    return () => {}
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Box className={styles.container}>
        <SearchRooms className={styles.animation } />
      </Box>
    </Layout>
  )
}

export default Lead