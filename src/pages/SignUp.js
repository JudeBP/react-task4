import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react'
import Details from '../components/Details';
import Form from '../components/Form'

const SignUp = () => {

    let initialData = {
        name: "",
        dob: "",
        email: "",
        contactNo: "",
        quickFact: "",
    }

    // States
    const [user, setUser] = useState(initialData);
    const [openNotification, setOpenNotification] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Submit form
    const submitForm = (user) => {
        if (user.name !== "" && user.dob !== "" && user.email !== "" && user.contactNo !== "" && user.quickFact !== "") {
            setUser(user)
            showNotification(user);
        }
    }

    // Show notification
    const showNotification = () => {
        setOpenNotification(true);
        setOpenSnackbar(true);
    }

    // Close notification
    const closeNotification = () => {
        setUser(initialData);
        setOpenNotification(false);
    }

    // Close notif snackbar
    const closeSnackbar = () => {
        setOpenSnackbar(false);
    }

    return (
        <>
            <div style={{ marginTop: '-20px' }}>
                <Form submitForm={submitForm} />
            </div>
            <Details modalOpen={openNotification} onModalClose={closeNotification} user={user} />
            <Snackbar
                open={openSnackbar}
                onClose={closeSnackbar}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={closeSnackbar} severity="success" >
                    You have signed up!
                </Alert>
            </Snackbar>
        </>
    )
}

export default SignUp