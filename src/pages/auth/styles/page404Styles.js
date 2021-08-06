import { makeStyles } from '@material-ui/styles';
import Commons from '../../../utils/styles';
import { colors } from '../../../styleguide';

const styles = makeStyles({
  container: {
    ...Commons.flexCenter,
    flexDirection: 'column',
    position: 'relative',
    background: 'white',
    height: '100%',
    width: '100vw',
  },
  img: {
    width: 180
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    maxWidth: 390,
    margin: 30
  },
  button: {
    backgroundColor: colors.blue,
    padding: '12px 24px',
    borderRadius: 30,
    color: colors.white
  }
});

export default styles;