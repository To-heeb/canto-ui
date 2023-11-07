import { MenuItem, TextField } from "@mui/material";


const business_types = [
    {
        value: '1',
        label: 'Provision',
    },
    {
        value: '0',
        label: 'Beverage',
    }
];

export default function BusinessType() {
    return (
        <TextField
            id="type"
            name="type"
            select
            label="Type"
            defaultValue=""
            helperText="Please select business type"
        >
            {business_types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}