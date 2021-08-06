import { makeStyles } from '@material-ui/styles';
import Commons from '../../../utils/styles';
import { colors } from '../../../styleguide';
import BgLogin from '../../../assets/auth/bg-welcome.png';

const styles = makeStyles({
  container: {
    backgroundColor: colors.darkGray,
    position: 'relative',
    background: 'white',
    overflow: 'auto',
    height: '100%',
    width: '100vw',
  },
  content: {
    ...Commons.flexColumn,
    justifyContent: 'space-between',
    height: '100%',
    width: '90%',
    maxWidth: 450,
    margin: '0 auto'
  },
  welcome: {
    ...Commons.flexColumn,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${BgLogin})`,
    width: '70vw',
    height: '22.7vw',
    maxWidth: 240,
    maxHeight: 78,
    justifyContent: 'flex-end',
    fontWeight: 500,
    fontSize: 42
  },
  logo: {
    width: 78,
    margin: '0 auto',
    marginTop: 24,
  },
  lblWel: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center'
  },
  contInputs: {
    width: '100%',
    position: 'relative'
  },
  btnBack: {
    ...Commons.flexCenter,
    position: 'absolute',
    zIndex: 1,
    top: 51,
    left: -12,
    cursor: 'pointer',
    width: 36,
    height: 36,
    borderRadius: '50%',
    backgroundColor: colors.white,
    color: colors.black,
  },
  contInput: {
    width: 'calc(100% - 50px)',
    border: '1px solid #403E49',
    padding: '0px 24px 12px 24px',
    background: colors.mediumLightGray,
    borderRadius: 42,
    position: 'relative',
    marginBottom: 18,
    height: 42,
    '&.focused': {
      border: '1px solid #55945E',
    }
  },
  input: {
    backgroundColor: 'transparent',
    width: '100%',
    outline: 'none',
    fontSize: 18,
    marginTop: -6,
    '& input': {
      color: colors.white,
    },
    '& div': {
      top: '9px !important'
    },
    '& div:before': {
      border: 'none !important'
    },
    '& div:after': {
      border: 'none !important'
    },
    '& label': {
      color: 'white !important',
    },
    '& label.MuiFormLabel-filled': {
      top: '9px !important'
    },
    '& label.Mui-focused': {
      top: '9px !important'
    }
  },
  eyeBt: {
    position: 'absolute',
    cursor: 'pointer',
    right: 18,
    zIndex: 1,
    top: 15,
    color: colors.white,
    opacity: 0.5
  },
  inputPhone: {
    width: 'calc(100% - 36px) !important',
    backgroundColor: 'transparent !important',
    border: 'none !important',
    color: 'white !important',
    fontSize: '18px !important',
    margin: '0px 18px !important',
    top: 12,
    '&::placeholder': {
      color: colors.white,
      opacity: 1
    }
  },
  inputPhoneDrop: {
    backgroundColor: 'transparent !important',
    border: '1px solid #D6D6D6 !important',
    borderRadius: '42px !important',
    paddingRight: '18px !important',
    paddingLeft: '18px !important',
    marginLeft: '-24px !important',
    '& div': {
      backgroundColor: 'transparent !important',
    },
    '& .arrow': {
      borderTopColor: 'white !important',
    }
  },
  listDrop: {
    '& li': {
      color: 'black !important',
    }
  },
  label: {
    color: colors.mainxText,
    textAlign: 'center',
    fontSize: 18,
    margin: 0,
    opacity: 0.5,
    marginBottom: 15
  },
  lblLost: {
    color: colors.preppyGreen,
    fontSize: 14,
    margin: 0,
    marginTop: -12,
    marginBottom: 18,
    cursor: 'pointer',
    textAlign: 'right'
  },
  sendBt: {
    width: 'calc(100% - 24px)',
    margin: '0 auto',
    background: colors.white,
    borderRadius: 25,
    color: colors.black,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    padding: '16px 12px',
    cursor: 'pointer'
  },
  disabledBtn: {
    border: '1px solid #403E49',
    background: colors.lightGray,
    color: '#EBEBEB',
    opacity: '0.5'
  },
  lineOr: {
    position: 'relative',
    borderTop: '1px solid white',
    margin: '12px 0px'
  },
  lblContinue: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.white,
    margin: 0,
    backgroundColor: colors.darkGray,
    position: 'absolute',
    top: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '3px 17px'
  },
  rowSocial: {
    ...Commons.flexCenter,
    marginTop: 24
  },
  iconSocial: {
    width: 42,
    margin: '0px 12px',
    cursor: 'pointer'
  },
  iconSocialO: {
    width: 42,
    margin: '0px 12px',
    opacity: 0.5
  },
  bottonLbl: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.white,
    margin: 0,
    '& span': {
      color: colors.preppyGreen,
      cursor: 'pointer',
      marginLeft: 6
    }
  },
});

export default styles;