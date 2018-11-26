import React from 'react';
import Businesstools from './businesstools.jsx'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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

class GoogleBusiness extends React.Component{
  render(){
    return(
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
      )
  }

}



export default GoogleBusiness;