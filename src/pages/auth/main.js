import React from 'react'
import Box from '@material-ui/core/Box'
import { authChanged } from '../../services/auth'
import { utilsAtom } from '../../atoms'
import { useAtom } from 'jotai'

const MainPage = (props) => {
  const [firstLoad, setFirstLoad] = React.useState(null)
  const [dataUser, setDataUser] = React.useState(null)
  const [canLoad, setCanLoad] = React.useState(true)
  const [, setLoading] = useAtom(utilsAtom.loading)

  React.useEffect(() => {
    if (firstLoad === false && canLoad) {
      const sessionData = localStorage.getItem('visited-dashboard')
      setFirstLoad(true)
      setCanLoad(false)
      if (dataUser) {
        props.history.push('/dashboard')
      } else if (sessionData) {
        props.history.push('/login')
      } else {
        props.history.push('/login')
      }
    }
    return () => {}
    //eslint-disable-next-line
  }, [firstLoad]);

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

  

  return <Box />
}

export default MainPage;
