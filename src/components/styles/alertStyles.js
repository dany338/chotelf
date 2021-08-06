import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styleguide'

const useStyles = makeStyles({
  '@keyframes slideInFromTop': {
    '0%': {
      top: -1000
    },
    '100%': {
      top: 0
    }
  },
  '@keyframes slideOutFromTop': {
    '0%': {
      top: 0
    },
    '100%': {
      top: -1000
    }
  },
  contAlerts: {
    position: 'fixed',
    top: 30,
    right: 16,
    zIndex: 50,
    width: 'calc(100% - 32px)'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blue,
    padding: 15,
    position: 'relative',
    right: 0,
    animation: '$slideInFromTop 0.5s ease-out',
    transition: 'all 0.2s',
    marginBottom: 12,
    borderRadius: 8
  },
  pop: {
    animation: '$slideOutFromTop 0.5s ease-out',
    top: -1000
  },
  iconAlert: {
    width: 30,
    height: 'auto',
    marginRight: 12
  },
  text: {
    margin: 0,
    color: colors.mediumLightGray,
    fontWeight: '400',
    fontSize: 16,
    flex: 1,
    marginRight: 12
  },
  success: {
    backgroundColor: colors.preppyGreen
  },
  warning: {
    backgroundColor: colors.orange
  },
  error: {
    backgroundColor: colors.orangeSoda
  }
});

export default useStyles;