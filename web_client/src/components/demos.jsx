import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Chartadata from './chartadata.jsx';
import GoogleApiWrapper from './map.jsx';
import data from './data.json';
import EntitySpecific from './entitySpecific.jsx'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    maxHeight: 800,
    backgroundColor: theme.palette.background.paper,
   marginTop: 20,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    open: true,
    entitySpecific:  false,
  };
  this.showEntity = this.showEntity.bind(this)
  this.handleEntityChange = this.handleEntityChange.bind(this)
}
  handleEntityChange(e){
    this.showEntity();
     e.stopPropagation();
     console.log("clicked");
  }

   showEntity(){
    this.setState({
      entitySpecific: (!this.state.entitySpecific)
    })
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    const Data = data.map((catagorey) =>
    <Chartadata image={catagorey.img} key={catagorey.catagorey} name={catagorey.catagorey} />
    )

    return (
        <div>
        {this.state.entitySpecific?
        <div>
        <div className="col col-lg-2">
          <div id="chartData" className={classes.root}>
          <EntitySpecific goBack={this.handleEntityChange}/>
        </div>
        </div>


        <GoogleApiWrapper />
        </div>
        :
        <div>
        <div className="col col-lg-2">
        <div id="chartData" className={classes.root}>
          {Data}
        </div>
        </div>
         <GoogleApiWrapper entity={this.handleEntityChange}/>
         </div>
        }
        </div>

    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);