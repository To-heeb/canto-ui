import { TextField } from "@mui/material";

export default function BusinessDescription() {
    return (
        <TextField
            label="Description"
            id="description"
            name='description'
            multiline
            rows={5}
            required />
    )
}