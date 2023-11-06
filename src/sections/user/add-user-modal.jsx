import { useState } from 'react';
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
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        role: "regular-admin",
        password: ""
    })


    const handleChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target
        console.log(name, value)
        setFormData((prevFromData) => ({
            ...prevFromData,
            [name]: value,
        }))

        console.log(formData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

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
                        }} spacing={3} direction="column"
                            onSubmit={handleSubmit}>
                            <TextField label="First Name" id="first_name" required onChange={handleChange} name='first_name' value={formData.first_name} />
                            <TextField label="Last Name" id="last_name" required onChange={handleChange} name='last_name' value={formData.last_name} />
                            <TextField label="Email" id="email" required onChange={handleChange} name='email' value={formData.email} />
                            <TextField
                                id="role"
                                select
                                required
                                name='role'
                                value={formData.role}
                                onChange={handleChange}
                                label="Role"
                                defaultValue="regular-admin"
                                helperText="Please select admin role"
                            >
                                {role.map((option) => (
                                    <MenuItem key={option.value} value={option.value} selected={formData.role === option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                required
                                onChange={handleChange}
                            />

                            <Button variant="contained" color="inherit" type='submit'>Submit</Button>

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
