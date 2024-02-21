import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

const MUIDialog = ()=>{

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Button onClick={()=>{ setOpen(true)}}>Open Dialog</Button>
            <Dialog open={isOpen}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                onClose={()=> setOpen(false)}
            >
                <DialogTitle
                    id="dialog-title"
                >Do you want to Submit Test ?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">Once you Submit, Cannot update it back.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=> setOpen(false)}>Cancel</Button>
                    <Button autoFocus onClick={()=> setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MUIDialog;