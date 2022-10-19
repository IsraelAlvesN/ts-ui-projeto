import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import React, { ReactNode } from "react"
import { useDrawerContext } from "../../contexts";

interface IMenuLateral{
    children: ReactNode;
}

export const MenuLateral: React.FC<IMenuLateral> = ({children}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()

    return(
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12)}} src="/static/images/avatar/1.jpg" />
                    </Box>
                </Box>
                <Divider/>
                <Box flex={1}>
                <List component="nav">
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Página Inicial' />
                    </ListItemButton>
                </List>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}
//10

