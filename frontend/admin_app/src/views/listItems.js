import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import ListAlt from '@material-ui/icons/ListAlt';

import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
      </Link>
      <Link to="/create" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Create new event" />
        </ListItem>
      </Link>
      <Link to="/logs" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary="Logs" />
        </ListItem>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </Link>
  </div>
);