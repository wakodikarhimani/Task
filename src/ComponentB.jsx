import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ComponentB(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={`${props.first_name} ${props.last_name}`} src={props.props.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={`${props.props.first_name} ${props.props.last_name}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {props.props.email}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}