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
import {GOOGLE_API} from '../../../mobile_client/secret.js';
import Businesstools from './businesstools.jsx'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
      let lat=result[0].lat
      let lng=result[0].lng
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        let postalCode = `${responseJson.results[0].address_components[2].long_name}, ${responseJson.results[0].address_components[4].long_name}, ${responseJson.results[0].address_components[7].long_name}`
        this.setState({
          cardInfo: {
            name: result[0].name,
            emails: result,
            postalCode: postalCode
          }
        })
      })
      .then(() => {
        this.showEntity()
      })
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
    <div> {/* parent */}
      {this.state.entitySpecific?
      <div>
        <div className="col col-lg-2"> {/* entity menu */}
          <div id="chartData" className={classes.root}>
            <EntitySpecific goBack={this.handleEntityChange} cardInfo={this.state.cardInfo}/>
          </div>
        </div>
        <GoogleApiWrapper mapMarkers={this.state.mapData} entity={this.handleEntityChange} clusterClickHandler={this.clusterClickHandler}/>
      </div>
      :
      <div>
        <div className="col col-lg-2">
          <div id="chartData" className={classes.root}>
            {menuCategories}
          </div>
            <Card style={{marginTop: 50}}>
              <div id="busniessTools" style={newStyles.title}>
                Google Business Tools
              </div>
              <CardContent style={newStyles.bizToolsContainer}>
                <div style={newStyles.bizToolsBox}>
                  <img src='../../styles/Images/google-biz-icons/google_my_business.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/assistant.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/analytics.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/adwords.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/vault.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/trends.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/ads.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/chrome.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/drive.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/gmail.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/calendar.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/sites.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/keep.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/slides.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/sheets.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/docs.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/forms.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/blogger.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/patents.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/meet.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/insights.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/hangouts.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/hangouts_on_air.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/google_plus.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/gsa.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/greentea.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/google_sync.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/google_optimize.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/google_hire.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/google_domains.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/google_data_studio.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/google_best_practices.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/firebase.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/files_go.png' style={newStyles.image}/>
                  <img src='../../styles/Images/google-biz-icons/cloud_print.png' style={newStyles.image}/>


                </div>
              </CardContent>
            </Card>
        </div>
        <GoogleApiWrapper  clusterClickHandler={this.clusterClickHandler} mapMarkers={this.state.mapData}/>
     </div>
    }
    </div>
    );
  }
}

const newStyles = {
  bizToolsContainer: {
    height: 200,
    overflow: 'auto'
  },
  bizToolsBox: {
    display: 'flex',
    font: 'roboto',
    flexWrap: 'wrap',
    marginTop: 20,
    borderTop: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#F1F3F4'
  },
  title: {
    fontWeight: 500,
    paddingTop: 20,
    paddingLeft: 25
  },
  image: {
    height: 50,
    margin: 6
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