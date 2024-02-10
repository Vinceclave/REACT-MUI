import { 
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material'
import { useState } from 'react'


const MuiDialog = () => {
    const [open, setOpen] = useState(false)

    return (
    <div>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog 
        open={open}
        onClose={() => setOpen(false)}
        aria-label='dialog-title' 
        aria-describedby='aria-description'
       >
        <DialogTitle id="dialog-title">Submit the text</DialogTitle>
        <DialogContent>
            <DialogContentText id="dialog-description">
                Are you sure you want to submit the test? 
                You will not be able to edit after submitting
            </DialogContentText>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Submit</Button>
            </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MuiDialog

