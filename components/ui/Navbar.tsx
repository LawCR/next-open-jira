import { useContext } from 'react';
import NextLink from 'next/link';
import { AppBar, IconButton, Toolbar, Typography, Link, FormControlLabel, FormGroup, Switch, Box } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { UIContext } from '../../context/ui';

export const Navbar = () => {

    const {openSideMenu, mode, setMode} = useContext(UIContext)


    return (
    <AppBar position="sticky">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <IconButton 
                    size="large"
                    edge="start"
                    onClick={openSideMenu}
                    sx={{color: 'white'}}
                >
                    <MenuOutlinedIcon />
                </IconButton>
                <NextLink href="/" passHref>
                    <Link underline='none' color='white'>
                        <Typography variant="h6">OpenJira</Typography>
                    </Link>
                </NextLink>
            </Box>
            <FormGroup>
                <FormControlLabel  control={<Switch checked={mode} onChange={setMode}  />} label={mode ? <DarkModeIcon sx={{marginTop: 0.5}} />  : <LightModeIcon sx={{marginTop: 0.5}} />} />
            </FormGroup>
        </Toolbar>
    </AppBar>
    )
}
