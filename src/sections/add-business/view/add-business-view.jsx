
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
import BusinessWorkingHours from '../business-working-hours';

// ----------------------------------------------------------------------
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
export default function AddBusinessesView() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        description: "",
        status: 1,
        type: 0,
        working_hours: {}
    })

    const handleChange = (event) => {
        console.log(event)
        console.log(event.target.name)
        const { name, value } = event.target
        console.log(name)
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleWorkingHour = (event, dayOfWeek, label) => {

        const timeFormat = formatTime(event.$H, event.$m)
        const dayNumber = weekdays.indexOf(dayOfWeek) + 1
        const workingHours = formData.working_hours

        // console.log(dayOfWeek)
        // console.log(dayNumber)
        // console.log(timeFormat)

        const hours = {
            "opened_at": label === "opened_at" ? timeFormat : formData.working_hours?.[dayNumber]?.opened_at,
            "closed_at": label === "closed_at" ? timeFormat : formData.working_hours?.[dayNumber]?.closed_at
        }

        const working_hours = {
            [dayNumber]: hours
        }

        // console.log('before_update', workingHours)
        console.log([...workingHours])

        const newWorkingHours = {
            ...workingHours,
            working_hours
        }

        console.log('after_update', newWorkingHours)

        setFormData((prevFormData) => ({
            ...prevFormData,
            working_hours: newWorkingHours
        }))

        // console.log(formData.working_hours)
    }

    console.log("working hours:", formData.working_hours)

    const formatTime = (hour, minute, second = 0, millisecond = 0) => {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const formattedSecond = second.toString().padStart(2, '0');
        // const formattedMillisecond = millisecond.toString().padStart(3, '0');

        // Creating a formatted time string
        return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    }

    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Add new business</Typography>
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
                        <BusinessLocation value={formData.location} onChange={handleChange} />
                        <BusinessType value={formData.type} onChange={handleChange} />
                        <BusinessStatus value={formData.status} onChange={handleChange} />
                        {weekdays.map((weekday) => (
                            < BusinessWorkingHours
                                key={weekday}
                                weekday={weekday}
                                opened_at={formData.working_hours?.[weekday]?.opened_at}
                                closed_at={formData.working_hours?.[weekday]?.closed_at}
                                value={formData.working_hours}
                                onChangeWorkingHour={handleWorkingHour} />
                        ))}
                        <BusinessDescription value={formData.description} onChange={handleChange} />
                        <Box sx={{
                            display: "flex",
                            justifyContent: "end"
                        }}>
                            <Button variant="contained" color="inherit" type='submit'>Submit</Button>
                        </Box>
                    </Stack>

                </Box>
            </Paper >

        </Container >
    );
}
