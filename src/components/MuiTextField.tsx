import { Stack, TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'

const MuiTextField = () => {
  const [value, setValue] = useState('')

  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
          <TextField label='name' variant='outlined' />
          <TextField label='name' variant='filled' />
          <TextField label='name' variant='standard' />
        </Stack>
        <Stack direction='row' spacing={2}>
          <TextField size='small' label='Small secondary' color='secondary' />
        </Stack>
        <Stack direction='row' spacing={2}>
          <TextField 
             label='Password'
             type='password' 
             value={value}
             onChange={ e => setValue(e.target.value)}
             error={!value}
             helperText={!value ? 'Required' : 'Do not share your password to anyone'}
             required/>
          <TextField 
            label='Password'
            type='password' 
            helperText='Do not share your password to anyone'
            disabled/>
            <TextField label='Read only' InputProps={{ readOnly:true}}/>
        </Stack>
        <Stack direction='row' spacing={4}>
          <TextField label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }} />
          <TextField label='Weight'
          InputProps={{
            startAdornment: <InputAdornment position='start'>kg</InputAdornment>
          }} />

        </Stack>
    </Stack>      
  )
}

export default MuiTextField
