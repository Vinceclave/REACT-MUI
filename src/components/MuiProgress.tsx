import { Stack, CircularProgress, LinearProgress} from '@mui/material'

const MuiProgress = () => {
  return <Stack spacing={2}>
    <CircularProgress />
    <CircularProgress color='success'/>
    <CircularProgress variant='determinate' value={50}/>

    <LinearProgress />
    <LinearProgress color='success'/>
    <LinearProgress variant='determinate' value={50}/>
  </Stack>
}

export default MuiProgress
