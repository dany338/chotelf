import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import { utilsAtom } from '../atoms';
import { useAtom } from 'jotai'

const useStyles = makeStyles({
  contLoader: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    height: '100%',
    display: 'flex',
    width: '100vw',
    zIndex: 100,
    left: '0px',
    top: '0px',
  }
});

const LoadingComponent = () => {
  const styles = useStyles();
  const [loading] = useAtom(utilsAtom.loading)
  const [errorLoad] = useAtom(utilsAtom.errorLoad)

  // Handle the loading state
  if (loading.show) {
    return <div className={styles.contLoader} style={{
      opacity: loading.opacity || 1
    }}>
      <CircularProgress />
    </div>;
  } else if (errorLoad) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

export default LoadingComponent