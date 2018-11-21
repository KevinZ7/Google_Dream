import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuSingleEntity from './MenuSingleEntity.jsx'

import data from './data.json'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  entities: []
});

class NestedList extends React.Component {
  state = {
    open: false,
    selectedIndex: ''
  };
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  handleClick = (event, index) => {
    this.setState(state => ({ open: !state.open }));
  };
  backToNoting =(event) =>{
    this.setState({selectedIndex: ''})
  }

  componentDidMount() {
    if (this.props.name === 'Amusement') {
      this.setState({
        entities: [
        {
          name: 'Bubble Tea'
        },
        {
          name: 'Tim Hortons'
        }]
      })
    } else {
      this.setState({
        entities: [
        {
          name: 'McDonalds'
        }, {
          name: 'Staples'
        }]
      })
    }
  }

  render() {
    const { classes } = this.props;

    let singleEntityItem;

    if (this.state.entities !== undefined) {
      singleEntityItem = this.state.entities.map((item) => {
        return <MenuSingleEntity entityName={item.name} />
      })
     } else {
      singleEntityItem = []
     }

    return (
      <div className={classes.root}>
        <List  component="nav" >
          <ListItem id="chartData"  button onClick={this.handleClick}>
            <img id="icon" src={this.props.image}/>
            <ListItemText  id="title" inset primary={this.props.name} />
            {this.state.open ? <ExpandLess id="arrow"/> : <ExpandMore id="arrow" />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List id="entitySpecific" component="div" disablePadding>
              {singleEntityItem}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);