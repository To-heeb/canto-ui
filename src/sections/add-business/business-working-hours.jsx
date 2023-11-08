import dayjs from 'dayjs';
import * as React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function BusinessWorkingHour({ weekday }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker', 'TimePicker']} fullWidth sx={{
                display: 'flex',
                justifyContent: "space-between",
                flexDirection: { sx: "column", md: "row" },
                // border: "1px solid red"
            }}>
                <Box sx={{
                    pt: { sx: "0px", md: "15px" },
                    textAlign: "center",
                }}>
                    {weekday}
                </Box>
                <TimePicker
                    label="Opening hour"
                    defaultValue={dayjs('2022-04-17T09:00')}
                    slotProps={{ textField: { fullWidth: true } }}
                />
                <TimePicker
                    label="Closing hour"
                    defaultValue={dayjs('2022-04-17T17:00')}
                    slotProps={{ textField: { fullWidth: true } }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}


BusinessWorkingHour.propTypes = {
    weekday: PropTypes.string,
};