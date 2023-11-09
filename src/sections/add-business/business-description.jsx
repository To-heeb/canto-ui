import PropTypes from 'prop-types';

import { TextField } from "@mui/material";

export default function BusinessDescription({ value, onChange }) {
    return (
        <TextField
            label="Description"
            id="description"
            name='description'
            value={value}
            onChange={onChange}
            multiline
            rows={5}
            required />
    )
}


BusinessDescription.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
