import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

BusinsessSort.propTypes = {
    options: PropTypes.array,
    onSort: PropTypes.func,
};

export default function BusinsessSort({ options, onSort }) {
    return (
        <TextField select size="small" value="latest" onChange={onSort}>
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}
