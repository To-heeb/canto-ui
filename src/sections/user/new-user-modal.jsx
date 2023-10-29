// import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { Stack } from '@mui/material';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', md: '40%', },
    height: 300,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

// ----------------------------------------------------------------------

export default function NewUserModal({ openStatus, handleClose }) {


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
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            New Admin
                        </Typography>

                        <Stack component="form" sx={{ mt: 5 }} spacing={3}>
                            <TextField fullWidth label="First Name" id="fullWidth" required />
                            <TextField fullWidth label="Last Name" id="fullWidth" required />
                            <TextField fullWidth label="Email" id="fullWidth" required />
                            <TextField fullWidth label="Role" id="fullWidth" required />
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
