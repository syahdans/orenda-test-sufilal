import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export default function DrawerContent({ onClose }) {
  const menuItems = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.label} onClick={onClose}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
}

