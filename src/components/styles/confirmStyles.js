import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styleguide'
import Commons from '../../utils/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: `${colors.darkGray}60`,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    height: '100%',
    display: 'flex',
    width: '100vw',
    zIndex: 25,
    left: '0px',
    top: '0px',
  },
  contConfirm: {
    ...Commons.flexCenter,
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: '18px 6px',
    width: 'calc(100% - 36px)',
    maxWidth: 388,
  },
  iconClose: {
    cursor: 'pointer',
    position: 'absolute',
    right: 20,
    top: 16,
    zIndex: 1
  },
  emoji: {
    fontSize: 40,
    marginTop: 12
  },
  title: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 20,
    margin: '8px 0px',
    color: colors.darkGray
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    margin: '12px 0px 24px 0px',
    color: colors.mediumLightGray,
    lineHeight: '21px',
    width: '80%'
  },
  rowButtons: {
    ...Commons.flexRow,
    width: '90%',
    marginTop: 6
  },
  btAccept: {
    border: `1px solid ${colors.preppyGreen}`,
    padding: '15px 0px 13px 0px',
    flex: 1,
    color: colors.preppyGreen,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 30,
    backgroundColor: colors.white
  },
  btCancel: {
    border: `1px solid ${colors.preppyGreen}`,
    padding: '15px 0px 13px 0px',
    flex: 1,
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 30,
    backgroundColor: colors.preppyGreen,
    marginLeft: 18
  }
});

export default useStyles;