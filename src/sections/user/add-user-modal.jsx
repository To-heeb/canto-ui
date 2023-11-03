// import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { Stack } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import MenuItem from "@mui/material/MenuItem"
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', md: '40%', },
    height: { xs: '70%', md: '70%', lg: '50%' },
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    // overflowX: 'hidden',
    overflowY: 'auto    '

};


const role = [
    {
        value: 'regular-admin',
        label: 'Admin',
    },
    {
        value: 'super-admin',
        label: 'Super Admin',
    }
];
// ----------------------------------------------------------------------

export default function NewUserModal({ openStatus, handleClose }) {
    console.log(handleClose)

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openStatus}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openStatus}>
                    <Box sx={style}>
                        <Stack direction="row" alignItems="right" justifyContent="space-between" mb={5}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                New Admin
                            </Typography>

                            {/* style this later */}
                            <Iconify icon="iconoir:cancel" onClick={handleClose} />
                        </Stack>


                        <Stack component="form" sx={{
                            mt: 5,
                        }} spacing={3} direction="column" >
                            <TextField label="First Name" id="first_name" required />
                            <TextField label="Last Name" id="last_name" required />
                            <TextField label="Email" id="email" required />
                            <TextField
                                id="role"
                                select
                                required
                                label="Role"
                                defaultValue="regular-admin"
                                helperText="Please select admin role"
                            >
                                {role.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                required
                            />

                            <Button variant="contained" color="inherit" >Submit</Button>

                        </Stack>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

NewUserModal.propTypes = {
    openStatus: PropTypes.bool,
    handleClose: PropTypes.func
};
