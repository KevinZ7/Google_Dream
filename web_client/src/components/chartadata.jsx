import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
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
    function capitalizeFirstLetter(string) {
    var words =  string.split('_')
     var capWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
     return capWords.join(' ');
    }

    let singleEntityItem;
    const entities = [...new Set(this.state.entitiesData.map(entity => entity.name))]
    const menuEntities = entities.map((entity) =>
      <MenuSingleEntity entityName={entity} showMarkersOfEntity={this.props.showMarkersOfEntity} index={entity} onClick/>
    )

    let category = this.props.category

    return (
      <div className={classes.root}>
        <List  component="nav" >
          <ListItem id="chartData"  button onClick={this.handleClick}>
            <img className="icon" src={this.props.image}/>
            <ListItemText  id="title" inset primary={capitalizeFirstLetter(category)} />
            {this.state.open ? <ArrowDropDown id="arrow"/> : <ArrowRight id="arrow" />}
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
    paddingRight: 30,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);