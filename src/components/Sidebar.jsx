import React from 'react'
import {Box, Switch} from  '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ModeNight from '@mui/icons-material/ModeNight';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HomeIcon from '@mui/icons-material/Home';
import TableViewIcon from '@mui/icons-material/TableView';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CallIcon from '@mui/icons-material/Call';

export const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block" }}}>
      <Box position={"fixed"}>
    <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText primary="Receipt" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TableViewIcon />
              </ListItemIcon>
              <ListItemText primary="Table" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PrecisionManufacturingIcon />
              </ListItemIcon>
              <ListItemText primary="Manufacturing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AutoStoriesIcon />
              </ListItemIcon>
              <ListItemText primary="Stories" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <ListItemText primary="Call" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light"?"dark":"light")}/>
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}
