
import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import BusinessName from '../business-name';
import BusinessType from '../business-type';
import BusinessStatus from '../business-status';
import BusinessLocation from '../business-location';
import BusinessDescription from '../business-description';
// import BusinessType from '../business-type';

// ----------------------------------------------------------------------

export default function AddBusinessesView() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        description: "",
        status: 1,
        type: 0,
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }
    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Add a new business</Typography>
            </Stack>



            <Paper sx={{
                textAlign: 'center',
                padding: '5px',
            }} elevation={1}>
                <Box sx={{
                    padding: 5,
                }} >

                    <Stack component="form" sx={{
                        mt: 3,
                    }} spacing={3} direction="column" >
                        <BusinessName value={formData.name} onChange={handleChange} />
                        <BusinessLocation />
                        <BusinessType />
                        <BusinessStatus />
                        <BusinessDescription />
                        {/* ad business working hours here */}
                        <Box sx={{
                            display: "flex",
                            justifyContent: "end"
                        }}>
                            <Button variant="contained" color="inherit" type='submit'>Submit</Button>
                        </Box>
                    </Stack>

                </Box>
            </Paper>

        </Container>
    );
}
