import {Tooltip, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

const MuiTooltip = () => {
  return (
      <Tooltip 
        title="delete" 
        placement="right" 
        arrow
        enterDelay={300}
        leaveDelay={300}>
        <IconButton>
            <DeleteIcon />
        </IconButton>
      </Tooltip>
  )
}

export default MuiTooltip
