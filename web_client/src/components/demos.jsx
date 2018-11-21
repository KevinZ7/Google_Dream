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
    menuData: [],
    mapData: []
  };
  this.showEntity = this.showEntity.bind(this)
  this.handleEntityChange = this.handleEntityChange.bind(this)
  this.showMarkersOfEntity = this.showMarkersOfEntity.bind(this)
}
  handleEntityChange(e){
    this.showEntity();
  }

  showEntity(){
    this.setState({
      entitySpecific: (!this.state.entitySpecific)
    })
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  showMarkersOfEntity(entity) {
    console.log(entity)
    fetch(`http://0.0.0.0:8080/entities/${entity}`)
    .then(res => res.json(res))
    .then(data => {
      console.log(data)
      this.setState({
        mapData: data
      })
    })
  }

  componentDidMount() {
    fetch('http://0.0.0.0:8080/categories')
    .then(res => res.json(res))
    .then(data => {
      this.setState({
        menuData: data
      })
    })
  }

  render() {
    const { classes } = this.props;

    const categories = [...new Set(this.state.menuData.map(category => category.name))]

    const menuCategories = categories.map((category) => {
        let image = `../../styles/Images/${category}_icon_grey.png`
        return <Chartadata key={category} category={category} image={image} showMarkersOfEntity={this.showMarkersOfEntity}/>
      }
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
            {menuCategories}
          </div>
        </div>
        <GoogleApiWrapper mapData={this.state.mapData} entity={this.handleEntityChange}/>
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