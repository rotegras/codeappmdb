import { styled } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const ActionButton = styled(Fab)({
    border: 0,
    borderRadius: 99,
    color: 'white',
    size: 'small',
    maxWidth: '24px',
    maxHeight: '24px',
    minHeight: '0',
    padding: '0'
});

export default ActionButton;