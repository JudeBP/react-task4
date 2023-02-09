import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: '95vh',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    bgcolor: 'background.paper',
    overflow: 'auto',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Details = ({ user, onModalClose, modalOpen }) => {

    const closeForm = () => {
        onModalClose();
    }
    return (
        <>
            <Modal
                open={modalOpen}
                onClose={closeForm}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <CardContent>
                        <h2 style={{textAlign: 'center', color: 'green'}}>You have signed up!</h2>
                        <h3 style={{textAlign: 'center'}}>User Details</h3>
                        <p>Name: { user.name }</p>
                        <p>Date of Birth: { user.dob }</p>
                        <p>Email: { user.email }</p>
                        <p>Contact No.: { user.contactNo }</p>
                        <p>Quick Fact: { user.quickFact }</p>
                    </CardContent>
                    <CardActions sx={{ flexDirection: 'row-reverse' }}>
                        <Button onClick={closeForm} size="small">Close</Button>
                    </CardActions>
                </Card>
            </Modal>
        </>
    )
}

export default Details