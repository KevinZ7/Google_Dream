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


class NestedList extends React.Component {
  state = {
    open: false,
    selectedIndex: '',
    entitiesData: []
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
    fetch(`http://0.0.0.0:8080/categories/${this.props.category}`)
    .then(res => res.json(res))
    .then(data => {

      this.setState({
        entitiesData: data
      })
    })

  }

  render() {
    const { classes } = this.props;

    let singleEntityItem;
    const entities = [...new Set(this.state.entitiesData.map(entity => entity.name))]
    const menuEntities = entities.map((entity,i) =>
      <MenuSingleEntity entityName={entity} showMarkersOfEntity={this.props.showMarkersOfEntity} index={i}/>
    )

    let category = this.props.category
    const capitalCategory = category.split('_').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')

    return (
      <div className={classes.root}>
        <List  component="nav" >
          <ListItem id="chartData"  button onClick={this.handleClick}>
            <img id="icon" src={this.props.image}/>
            <ListItemText  id="title" inset primary={capitalCategory} />
            {this.state.open ? <ExpandLess id="arrow"/> : <ExpandMore id="arrow" />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List id="entitySpecific" component="div" disablePadding>
              {menuEntities}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingRight: 30
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);