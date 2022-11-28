import React from 'react';
import { Box, Toolbar, AppBar, styled, Typography, InputBase, Badge,Menu,MenuItem } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react'

const StyleToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px ",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));
const UserBox = styled(Box)(({ Box }) => ({
    display:"flex",
    gap:"10px",
    alignItems:"center"
}));






export const Navbar = () => {
   const [open, setOpen] = useState(false);
    return (
        <>
            <AppBar sx={{ position: "sticky" }}>
                <StyleToolbar>
                    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>POC</Typography>
                    <AdbIcon sx={{ display: { xs: "block", sm: "none" } }} />
                    <Search><InputBase placeholder="search..." /></Search>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>

                        <Badge badgeContent={2} color="error">
                            <NotificationsNoneIcon />
                        </Badge>
                    </Icons>
                    <UserBox onClick={e=>setOpen(true)}>
                    <Avatar
                    onClick={e=>setOpen(true)}
                    sx={{width:"30px", height:"30px "}} alt="Travis Howard" src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    </UserBox>
                </StyleToolbar>

                {/* menuBar */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
  
            </AppBar>
        </>

    )
}
