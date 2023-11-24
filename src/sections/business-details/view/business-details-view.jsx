import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';

import AddBusinessItemModal from '../add-business-item-modal';
import EditBusinessItemModal from '../edit-business-item-modal';
// ----------------------------------------------------------------------

export default function BusinessDetailsView() {
    const params = useParams();

    const [openAddBusinessItemModal, setOpenAddBusinessItemModal] = useState(false);

    const [openEditBusinessItemModal, setOpenEditBusinessItemModal] = useState(false);


    const handleAddBusinessItemModalOpen = (event) => {
        setOpenAddBusinessItemModal(true)
    }

    const handleAddBusinessItemModalClose = (event) => {
        setOpenAddBusinessItemModal(false)
    }

    const handleEditBusinessItemModalOpen = (event) => {
        setOpenEditBusinessItemModal(true)
    }

    const handleEditBusinessItemModalClose = (event) => {
        setOpenEditBusinessItemModal(false)
    }

    return (
        <Container>
            I am {params.business_id}

            <AddBusinessItemModal openStatus={openAddBusinessItemModal} handleClose={handleAddBusinessItemModalClose} />
            <EditBusinessItemModal openStatus={openEditBusinessItemModal} handleClose={handleEditBusinessItemModalClose} />
        </Container>
    );
}
