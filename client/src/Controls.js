import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Controls = ({open, clickCB}) => {

    const handleClick = e => {
       clickCB(); 
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox 
                        checked={open} 
                        onChange={e => handleClick(e)} 
                    />
                }
                label="toggle"
            />
        </FormGroup>
    );

};

export default Controls;

