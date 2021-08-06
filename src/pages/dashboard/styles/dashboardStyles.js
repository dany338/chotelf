import { makeStyles } from '@material-ui/styles';
import Commons from '../../../utils/styles';
import { colors } from '../../../styleguide';

const styles = makeStyles({
  '@keyframes appear2': {
    '0%': {
      opacity: 0,
      top: 20
    },
    '50%': {
      opacity: 0,
      top: 20
    },
    '100%': {
      opacity: 1,
      top: 0
    }
  },
  container: {
    ...Commons.flexCenter,
    flexDirection: 'column',
    background: colors.darkGray,
    overflow: 'auto',
    height: '100%',
    width: '100%',
    justifyContent: 'end',
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  animation: {
    position: 'relative',
    animation: '$appear2 2s ease-out',
  },
})

export default styles;