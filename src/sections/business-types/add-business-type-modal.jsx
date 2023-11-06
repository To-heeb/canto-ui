// import { useState } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { Stack } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
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
    height: { xs: '60%', md: '65%', lg: '45%' },
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    // overflowX: 'hidden',
    overflowY: 'auto    '

};


// ----------------------------------------------------------------------

export default function AddBusinessTypeModal({ openStatus, handleClose }) {

    const [formData, setFormData] = useState({
        name: "",
        description: ""
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
                                New Business Type
                            </Typography>

                            {/* style this later */}
                            <Iconify icon="iconoir:cancel" onClick={handleClose} />
                        </Stack>


                        <Stack component="form" sx={{
                            mt: 5,
                        }} spacing={3} direction="column" onSubmit={handleSubmit}>
                            <TextField label="Name" id="name" name="name" value={formData.name} required onChange={handleChange} />
                            <TextField label="Description" id="description" name='description' value={formData.description} multiline rows={5} required onChange={handleChange} />
                            <Button variant="contained" color="inherit" type='submit'>Submit</Button>

                        </Stack>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

AddBusinessTypeModal.propTypes = {
    openStatus: PropTypes.bool,
    handleClose: PropTypes.func
};
