import { Stack, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"

const MuiPicker = () => {
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        readOnly
        label="Date Picker"      
      >


      </DatePicker>


    </Stack>
  )
}

export default MuiPicker
