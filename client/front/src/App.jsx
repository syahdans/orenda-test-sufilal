import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardContent from './DashboardContent';
import DrawerContent from './DrawerContent';
import BasicBreadCrumbs from './BasicBreadCrumb';
// import { DrawerContent } from './DrawerContent';

export default function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Your Dashboard Title
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Added Drawer */}
      <Drawer
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerContent onClose={handleDrawerClose} /> 
      </Drawer>
      <Container fixed>

        <BasicBreadCrumbs />
        <DashboardContent />
      </Container>
    </div>
  );
}