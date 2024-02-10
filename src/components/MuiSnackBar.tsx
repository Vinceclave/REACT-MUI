import { Snackbar, Button, Alert, AlertProps } from "@mui/material"
import { useState, forwardRef } from "react"


const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props}/>
    }

)

const MuiSnackBar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
    
   
    return (
    <>
        <Button onClick={() => setOpen(true)}>
            Submit
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <SnackbarAlert onClose={handleClose} severity="info">
                form submitted successfully
            </SnackbarAlert>
        </Snackbar>
    </>      
  )
}

export default MuiSnackBar
