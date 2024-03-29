import { 
    Box, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    ListItemAvatar,
    Avatar,
    ListItemButton,
    Divider
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiList = () => {
  return <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
    <List>
      <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <ListItemAvatar>
                    <Avatar>
                        <MailIcon />
                    </Avatar>    
                </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='List item 1' secondary="secondary text" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <ListItemAvatar>
                    <Avatar>
                        <MailIcon />
                    </Avatar>    
                </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='List item 2' secondary="secondary text" />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <ListItemAvatar>
                    <Avatar>
                        <MailIcon />
                    </Avatar>    
                </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='List item 3' secondary="secondary text"/>
        </ListItemButton>
      </ListItem>
    </List>

  </Box>      
  
}

export default MuiList
