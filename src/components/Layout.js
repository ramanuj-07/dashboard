// src/components/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Tables from '../pages/Tables';
import Charts from '../pages/Chart';
import Calendar from '../pages/Calenders';
import Kanban from '../pages/Kanban';

const drawerWidth = 240;

const Layout = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: drawerWidth }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          style={{ width: drawerWidth }}
          anchor="left"
          open
        >
          <div style={{ marginTop: '64px' }} />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/tables">
              <ListItemText primary="Tables" />
            </ListItem>
            <ListItem button component={Link} to="/charts">
              <ListItemText primary="Charts" />
            </ListItem>
            <ListItem button component={Link} to="/calendar">
              <ListItemText primary="Calendar" />
            </ListItem>
            <ListItem button component={Link} to="/kanban">
              <ListItemText primary="Kanban" />
            </ListItem>
          </List>
        </Drawer>
        <main style={{ flexGrow: 1, padding: '24px', marginLeft: drawerWidth, marginTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Layout;