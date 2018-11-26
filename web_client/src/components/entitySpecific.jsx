import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import PinDrop from '@material-ui/icons/PinDrop';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {

  return <ListItem button component="a" {...props} />;
}

function SimpleList(props) {

 let emails = props.cardInfo.emails.map((email) => email.email)



 function mailToCLient(email){
    window.open(`mailto:${email}`)
  }

   function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
       <ListItemIcon onClick={props.goBack}>
          <ArrowBack />
        </ListItemIcon>
        <ListItem button id="cardName" >
          <ListItemText id="cardName" primary={capitalizeFirstLetter(props.cardInfo.name) } />
        </ListItem>
        <ListItem button>
          <ListItemIcon id="pin">
            <PinDrop />
          </ListItemIcon>
          <ListItemText id="pinDrop" primary={props.cardInfo.emails.length} secondary={`people interested in bringing a ${props.cardInfo.name} to their community`} />
        </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText id="postal"primary={props.cardInfo.postalCode} />
          </ListItem>
          <Divider />
          <ListItemLink href="#simple-list" onClick={() => mailToCLient(emails)}>
            <ListItemText id="email" primary="Client List" />
          </ListItemLink>
        </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);