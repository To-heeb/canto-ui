import PropTypes from 'prop-types';

import { TextField } from "@mui/material";

export default function BusinessLocation({ value, onChange }) {
    return (
        <TextField
            label="Location"
            id="location"
            name="location"
            value={value}
            onChange={onChange}
            required />
    )
}


BusinessLocation.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
