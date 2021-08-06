import { makeStyles } from '@material-ui/core/styles';
import Commons from '../../utils/styles';
import { colors } from '../../styleguide'

const useStyles = makeStyles({
  statistics: {
    ...Commons.flexCenter,
    position: 'relative',
  },
  grid: {
    ...Commons.flexRow,
  },
  contSearch: {
    padding: '0px 0px',
    width: '100%',
  },
  contInput: {
    ...Commons.flexRow,
    position: 'relative',
    width: 'calc(100% - 36px)',
    padding: '0px 18px',
  },
  input: {
    backgroundColor: colors.mediumLightGray,
    outline: 'none',
    border: '2px solid transparent',
    color: colors.white,
    padding: '22px 48px 22px 26px',
    borderRadius: 50,
    width: 'calc(100% - 68px)',
    fontSize: 16,
    '&::placeholder': {
      color: colors.white
    }
  },
  border: {
    border: `2px solid ${colors.preppyGreen}`,
  },
  searchIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    objectFit: 'contain',
    top: 21,
    right: 38
  },
  sublabel: {
    color: colors.darkCreamTwo,
    marginLeft: 18,
    marginTop: 12,
    fontSize: 12
  },
  contEmpty: {
    ...Commons.flexCenter,
    flexDirection: 'column',
    // minHeight: 'calc(100vh - 372px)'
  },
  emojiEmpty: {
    fontSize: 70,
    cursor: 'pointer',
  },
  titleEmpty: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '600',
    margin: '6px 0px'
  },
  labelEmpty: {
    color: colors.white,
    fontSize: 18,
    margin: 0,
    textAlign: 'center',
    width: '80%'
  },
  rowRed: {
    color: colors.red,
    fontSize: 20,
  },
  spaceTeams: {
    // minHeight: 'calc(100vh - 372px)',
    paddingTop: 18
  },
  accordion: {
    backgroundColor: 'transparent !important',
    borderBottom: `1px dashed ${colors.white}30`,
    width: 'calc(100% - 36px)',
    marginLeft: '18px !important',
    marginBottom: 24,
    boxShadow: 'none !important',
    '& .MuiAccordion-root:before': {
      display: 'none'
    },
    '& .MuiAccordionSummary-root': {
      padding: 0
    },
    '& .MuiAccordionDetails-root': {
      padding: '0px 0px 12px 0px'
    },
    '& .MuiAccordionSummary-root.Mui-disabled': {
      opacity: '1 !important'
    }
  },
  accordion2: {
    backgroundColor: 'transparent !important',
    borderBottom: `1px dashed ${colors.white}30`,
    width: 'calc(100% - 36px)',
    marginLeft: '18px !important',
    marginBottom: 300,
    boxShadow: 'none !important',
    '& .MuiAccordion-root:before': {
      display: 'none'
    },
    '& .MuiAccordionSummary-root': {
      padding: 0
    },
    '& .MuiAccordionDetails-root': {
      padding: '0px 0px 12px 0px'
    },
    '& .MuiAccordionSummary-root.Mui-disabled': {
      opacity: '1 !important'
    }
  },
  arrowicon: {
    width: 24,
  },
  hide: {
    opacity: 0
  },
  contNameLeague: {
    ...Commons.flexRow,
  },
  nameLeague: {
    color: colors.white,
    fontSize: 20,
    marginRight: 6
  },
  countLeague: {
    backgroundColor: colors.preppyGreen,
    color: colors.black,
    fontSize: 14,
    borderRadius: 30,
    padding: '6px 12px 2px 12px',
    position: 'relative',
    top: -2
  },
  subLblLeague: {
    color: colors.darkCreamTwo,
    opacity: 0.4,
    fontSize: 12,
    marginTop: 6
  },
  listTeams: {
    ...Commons.flexRow,
    flexWrap: 'wrap'
  },
  contTeam: {
    ...Commons.flexRow,
    backgroundColor: colors.white,
    border: `1px solid ${colors.darkCreamTwo}`,
    height: 34,
    padding: '0px 8px',
    borderRadius: 30,
    marginBottom: 12,
    marginRight: 12,
    cursor: 'pointer'
  },
  selected: {
    backgroundColor: 'transparent'
  },
  contImgTeam: {
    ...Commons.coverBackground,
    width: 18,
    height: 18,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  nameTeam: {
    fontSize: 14,
    color: colors.mediumLightGray,
    marginLeft: 6
  },
  white: {
    color: colors.white
  },
  root: {
    flexGrow: 1,
  },
  labelWidth: {
    width: '10%'
  },
  rowLine: {
    borderBottom: `1px dashed ${colors.white}30`,
    padding: '4px',
    margin: '4px !important'
  },
  center: {
    ...Commons.flexCenter
  },
  columnHeader: {
    fontWeight: 'bold',
    color: colors.preppyGreen,
  }
});

export default useStyles;