import PropTypes from 'prop-types';

import { MenuItem, TextField } from "@mui/material";


const business_types = [
    {
        value: 0,
        label: 'Select Type',
    },
    {
        value: 1,
        label: 'Beverage',
    },
    {
        value: 2,
        label: 'Provision',
    },

];

export default function BusinessType({ value, onChange }) {
    return (
        <TextField
            id="type"
            name="type"
            select
            label="Type"
            defaultValue=" "
            helperText="Please select business type"
            onChange={onChange}
            value={value}
        >
            {business_types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}

BusinessType.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
};
