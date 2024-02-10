import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Stack, 
    Button,
    Menu,
    MenuItem
} from '@mui/material'
import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'
import { useState } from 'react'

const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemon />
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        POKEMONAPP
                    </Typography>
                </IconButton>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button 
                        color='inherit' 
                        id='resources-button' 
                        aria-controls={open ? 'resources-menu' : undefined} 
                        endIcon={<KeyboardArrowDown />} 
                        onClick={handleClick}>Resources</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
            </Toolbar>
            <Menu 
                id='resource-menu' 
                anchorEl={anchorEl} 
                open={open}
                MenuListProps={{ 'aria-labelledby': 'resources-button', }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </AppBar>

    )
}

export default MuiNavbar
