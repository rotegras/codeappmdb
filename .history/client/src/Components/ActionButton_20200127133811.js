import { styled } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const ActionButton = styled(Fab)({
    display: 'flex',
    border: 0,
    borderRadius: 99,
    color: 'white',
    position: 'relative',
    // height: 8,
    // width: 24,
    padding: '10px 0'
});

export default ActionButton;