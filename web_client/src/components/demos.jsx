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

class NestedList extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    open: true,
    entitySpecific:  false,
    menuData: [],
    mapData: [],
    cardInfo: []
  };
  this.showEntity = this.showEntity.bind(this)
  this.handleEntityChange = this.handleEntityChange.bind(this)
  this.clusterClickHandler = this.clusterClickHandler.bind(this)
  this.showMarkersOfEntity = this.showMarkersOfEntity.bind(this)
}
  handleEntityChange(e){
    this.setState({
      entitySpecific: false
    })
  }

  clusterClickHandler(e){
    const clickedMarkers = e.getMarkers()
    var markerIds = [];
    clickedMarkers.forEach((marker) => {
      markerIds.push(Number(marker.title))
    })
    console.log(markerIds)
    var data = {username: "rohit"};

    fetch('http://0.0.0.0:8080/clusters/markers', {
      method: 'POST',
      body: "array="+markerIds,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((res)=>{
      return res.json(res)
    })
    .then((result) => {
      console.log(result)
      this.setState({
        cardInfo: {
          name: result[0].name,
          emails: result
        }
      })
    })
    .then(() => {
      this.showEntity()
    })
  }

  showEntity(){
    this.setState({
      entitySpecific: true
    })
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  showMarkersOfEntity(entity) {
    this.setState({
      mapData: []
    })
    fetch(`http://0.0.0.0:8080/entities/${entity}`)
    .then(res => res.json(res))
    .then(data => {
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
            <EntitySpecific goBack={this.handleEntityChange} cardInfo={this.state.cardInfo}/>
          </div>
        </div>
        <GoogleApiWrapper mapMarkers={this.state.mapData} entity={this.handleEntityChange} clusterClickHandler={this.clusterClickHandler}/>
      </div>
      :
      <div>
        <div  className="col col-lg-2">
          <div id="chartData" className={classes.root}>
            {menuCategories}
          </div>
        </div>
        <GoogleApiWrapper  clusterClickHandler={this.clusterClickHandler} mapMarkers={this.state.mapData}/>
     </div>
    }
    </div>
    );
  }
}

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

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);