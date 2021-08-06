import { makeStyles } from '@material-ui/styles';
import Commons from '../../../utils/styles';
import { colors } from '../../../styleguide'

const styles = makeStyles({
  container: {
    ...Commons.flexColumn,
    margin: 0,
    padding: 0,
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    backgroundColor: 'black',
    maxWidth: '100vw',
    width: '100vw',
    position: 'relative'
  },
  contBg: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
  },
  noise: {
    ...Commons.coverBackground,
    backgroundImage: `url("${require('../../../assets/navigation/noise.png')}")`,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  blur: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    backdropFilter: 'blur(90px)',
    // backgroundColor: 'rgba(255, 255, 255, .9)'
  },
  blueBg: {
    backgroundColor: colors.royalBlue,
    width: 178,
    height: 178,
    position: 'absolute',
    top: 6,
    left: -60
  },
  greenBg: {
    backgroundColor: colors.preppyGreen,
    width: 104,
    height: 104,
    position: 'absolute',
    top: '30%',
    right: 0
  },
  redBg: {
    backgroundColor: colors.orangeSoda,
    width: 134,
    height: 134,
    position: 'absolute',
    bottom: -20,
    right: -60
  },
  noColor: {
    backgroundColor: 'transparent'
  },
  colorGreen: {
    backgroundColor: colors.preppyGreen,
  },
  colorBlue: {
    backgroundColor: colors.royalBlue,
  },
  header: {
    ...Commons.flexRow,
    width: 'calc(100% - 32px)',
    backgroundColor: colors.darkGray,
    zIndex: 3,
    borderRadius: '0px 0px 20px 20px',
    padding: '24px 16px 12px 16px',
    // marginBottom: -108
  },
  hellName: {
    ...Commons.flexColumn,
    alignItems: 'flex-start',
    flex: 1,
    marginRight: 12,
  },
  hello: {
    fontSize: 14,
    color: colors.darkMediumCream
  },
  username: {
    color: colors.white,
    margin: 0,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: '28px',
    wordBreak: 'break-all'
  },
  titleHd: {
    color: colors.white,
    margin: 0,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: '28px',
  },
  iconNotify: {
    width: 30,
    height: 'auto',
    marginRight: 16,
    cursor: 'pointer'
  },
  contImgProfile: {
    ...Commons.coverBackground,
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: colors.black,
    margin: '0 auto',
    cursor: 'pointer'
  },
  contentDash: {
    ...Commons.flexColumn,
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    overflow: 'auto',
    zIndex: 2,
    marginTop: -12
  },
  tabs: {
    ...Commons.flexRow,
    height: 60,
    backgroundColor: colors.mediumDarkGray,
    width:'100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 2,
    overflow: 'hidden'
  },
  backDrop: {
    background: 'linear-gradient(180deg, rgba(22, 20, 31, 0) 15.57%, #16141F 100%)',
    position: 'absolute',
    width: '100%',
    height:  60,
    bottom: 54,
    zIndex: 2
  },
  tab: {
    ...Commons.flexCenter,
    flexDirection: 'column',
    height: '100%',
    width: 'calc(100% / 5)',
    cursor: 'pointer',
    zIndex: 2
  },
  iconTab: {
    width: 28
  },
  lblTab: {
    margin: 0,
    color: colors.white,
    fontSize: 10,
    fontWeight: '500',
    marginTop: 3
  },
  flex: {
    flex: 1
  },
  row: {
    ...Commons.flexRow
  },
  rowEducation: {
    ...Commons.flexRow,
    backgroundImage: `url("${require('../../../assets/navigation/grid-education.png')}")`,
    backgroundPosition: 'center right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 59px',
    backgroundColor: '#2A2637',
    justifyContent: 'space-between',
    padding: '18px 12px',
    borderRadius: 12,
    marginTop: 6,
    marginBottom: 6
  },
  tabEducation: {
    ...Commons.flexRow,
    cursor: 'pointer',
    '& img': {
      width: 18,
      height: 18,
      objectFit: 'contain'
    },
    '& span': {
      color: colors.white,
      fontSize: 18,
      margin: '0px 3px',
      position: 'relative',
      top: 2
    },
    '& .chev': {
      width: 12,
      height: 12,
      objectFit: 'contain',
      marginLeft: 6
    }
  }
})

export default styles;