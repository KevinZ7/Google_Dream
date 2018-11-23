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
import ArrowRight from '@material-ui/icons/ArrowRight';


const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class MenuSingleEntity extends React.Component {
  state = {
    selectedIndex: ''
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
    this.props.showMarkersOfEntity(this.props.entityName)
  };

  backToNoting = (event) => {
    this.setState({selectedIndex: ''})
  }

  render() {

    const { classes } = this.props;

    let entityName = this.props.entityName
    const capitalEntityName = entityName.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')

    return (

       <ListItem button id="entitySpecific" className={classes.nested} selected={this.state.selectedIndex === this.props.index} onDoubleClick={event => this.backToNoting()} onClick={() => this.handleListItemClick(event,this.props.index)}>
          <ListItemText inset id="entitySpecific" primary={capitalEntityName} />
          <ArrowRight id="entityarrow" />
       </ListItem>
    )

  }
}

export default withStyles(styles)(MenuSingleEntity);