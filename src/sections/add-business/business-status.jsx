import PropTypes from 'prop-types';

import { MenuItem, TextField } from "@mui/material";


const statuses = [
    {
        value: '1',
        label: 'Active',
    },
    {
        value: '0',
        label: 'Incative',
    }
];

export default function BusinessStatus({ value, onChange }) {
    return (
        <TextField
            id="status"
            name="status"
            select
            label="Status"
            // defaultValue="1"
            helperText="Please select business status"
            value={value}
            onChange={onChange}
        >
            {statuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}



BusinessStatus.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
};
