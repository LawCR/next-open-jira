import { useContext } from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Link } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { UIContext } from "../../context/ui";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

    const {sidemenuOpen, closeSideMenu} = useContext(UIContext)

    return (
        <Drawer
            anchor="left"
            open={ sidemenuOpen }
            onClose={ closeSideMenu }
        >
            <Box sx={{width: 250}}>
                <Box sx={{padding: '5px 10px'}}>
                    <Typography variant="h4">Menú</Typography>
                    <List>
                        <Link href="https://next-poke-app.vercel.app/" underline="none">
                            <ListItem button>
                                <ListItemIcon>
                                    <SportsEsportsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Pokemón App'} />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List>
                        {
                            menuItems.map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon /> }
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Box>
        </Drawer>
    )
}
