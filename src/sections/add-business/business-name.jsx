import PropTypes from 'prop-types';

import { TextField } from "@mui/material";

export default function BusinessDescription({ value, onChange }) {
    return (
        <TextField
            label="Name"
            id="name"
            name="name"
            value={value}
            onChange={onChange}
            required />
    )
}


BusinessDescription.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
