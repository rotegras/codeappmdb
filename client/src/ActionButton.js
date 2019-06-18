import React from 'react';
import { styled } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const ActionButton = styled(Fab)({
    display: 'flex',
    border: 0,
    borderRadius: 99, 
    color: 'white',
    height: 24,
    width: 36,
    // padding: '0 20px'
});



export default ActionButton;
