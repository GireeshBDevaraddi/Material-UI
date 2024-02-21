import { Alert, AlertProps, Button, Snackbar, SnackbarCloseReason } from "@mui/material";
import { SyntheticEvent, forwardRef, useState } from "react";


const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref){
        return <Alert  elevation={6} ref={ref} {...props}/>
    }
)

const MUISnackBar = () => {
    const [isOpen, setOpen] = useState(false);
    function handleClose(event?: Event | SyntheticEvent<any, Event>, reason?: SnackbarCloseReason): void {
        if (reason === 'clickaway') { return }
        setOpen(false)
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            <Snackbar
                message="Form Submittted Successfully"
                autoHideDuration={4000}
                onClose={handleClose}
                open={isOpen}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            />

            <Button onClick={() => setOpen(true)}>Custom Submit</Button>
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity="success">Custom Form Submitted</SnackbarAlert>
            </Snackbar>

            <Button onClick={() => setOpen(true)}>Custom Inline Submit</Button>
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert 
                    elevation={6}
                    onClose={handleClose}
                    severity="success"
                    sx={{width: "100%"}}
                >Custom Inline Form Submitted</Alert>
            </Snackbar>
        </>
    )
}

export default MUISnackBar;