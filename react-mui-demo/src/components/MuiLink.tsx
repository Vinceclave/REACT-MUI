import { Link, Stack, Typography } from '@mui/material'

const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Typography variant='body2'>
         <Link href='#'>Link</Link>
        </Typography>
        <Typography variant='h6'>
            <Link href='#' color='secondary' underline='none'>Link</Link>
        </Typography>
    </Stack>      
  )
}

export default MuiLink
