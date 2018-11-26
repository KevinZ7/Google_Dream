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
                  <a href="https://www.google.com/intl/en_ca/business/"><img src='../../styles/Images/google-biz-icons/google_my_business.png' style={newStyles.image}/></a>
                  <a href="https://assistant.google.com/intl/en_ca/"><img src='../../styles/Images/google-biz-icons/assistant.png' style={newStyles.image}/></a>
                  <a href="https://analytics.google.com/analytics/web/provision/?authuser=0#/provision"><img src='../../styles/Images/google-biz-icons/analytics.png' style={newStyles.image}/></a>
                  <a href="https://ads.google.com/intl/en-ca/start/?sourceid=awo&subid=ca-en-ha-g-aw-c-dr_df_1-b_pl!o2~-77588645-284305282921-kwd-12340353&gclid=Cj0KCQiArenfBRCoARIsAFc1FqdjjAwJdxQW_J66UV_mAdwpVv-8COSr3x-DQ0k7TmykZ5nvs64TM90aAgVxEALw_wcB#?modal_active=none"><img src='https://image.flaticon.com/icons/svg/281/281757.svg' style={newStyles.image}/></a>
                  <a href="https://support.google.com/vault#topic=2739742"><img src='../../styles/Images/google-biz-icons/vault.png' style={newStyles.image}/></a>
                  <a href="https://trends.google.com/trends/"><img src='../../styles/Images/google-biz-icons/trends.png' style={newStyles.image}/></a>
                  <a href="https://www.google.ca/chrome/?brand=CHBD&gclid=Cj0KCQiArenfBRCoARIsAFc1FqcXTOKVc3NAb5WOwHpavlTb_xO4QTHhClN_AtbZ0I_RSG4xQke2ycEaAgNTEALw_wcB&gclsrc=aw.ds"><img src='../../styles/Images/google-biz-icons/chrome.png' style={newStyles.image}/></a>
                  <a href="https://www.google.ca/drive/"><img src='../../styles/Images/google-biz-icons/drive.png' style={newStyles.image}/></a>
                  <a href=""><img src='../../styles/Images/google-biz-icons/gmail.png' style={newStyles.image}/></a>
                  <a href="https://calendar.google.com/calendar/r"><img src='../../styles/Images/google-biz-icons/calendar.png' style={newStyles.image}/></a>
                  <a href="https://sites.google.com/new"><img src='../../styles/Images/google-biz-icons/sites.png' style={newStyles.image}/></a>
                  <a href="https://keep.google.com/"><img src='../../styles/Images/google-biz-icons/keep.png' style={newStyles.image}/></a>
                  <a href="https://www.google.com/slides/about/"><img src='../../styles/Images/google-biz-icons/slides.png' style={newStyles.image}/></a>
                  <a href="https://www.google.com/sheets/about/"><img src='../../styles/Images/google-biz-icons/sheets.png' style={newStyles.image}/></a>
                  <a href="https://www.google.com/docs/about/"><img src='../../styles/Images/google-biz-icons/docs.png' style={newStyles.image}/></a>
                  <a href="https://www.google.com/forms/about/"><img src='../../styles/Images/google-biz-icons/forms.png' style={newStyles.image}/></a>
                  <a href="https://www.blogger.com/about/?r=1-null_user"><img src='../../styles/Images/google-biz-icons/blogger.png' style={newStyles.image}/></a>
                  <a href="https://patents.google.com/"><img src='../../styles/Images/google-biz-icons/patents.png' style={newStyles.image}/></a>
                  <a href="https://meet.google.com/_meet"><img src='../../styles/Images/google-biz-icons/meet.png' style={newStyles.image}/></a>
                  <a href="https://www.thinkwithgoogle.com/intl/en-ca/?utm_medium=cpc&utm_source=gsn&utm_team=twg-canada&utm_campaign=201807-ca-en-sem-twg-subscriptions&gclid=Cj0KCQiArenfBRCoARIsAFc1Fqd6Z4M2_FW4M6VFtEX-Zgaun_rlVlERYFA9h9dovQhFMnEsnRsXcFsaAteCEALw_wcB"><img src='../../styles/Images/google-biz-icons/insights.png' style={newStyles.image}/></a>
                  <a href="https://hangouts.google.com/"><img src='../../styles/Images/google-biz-icons/hangouts.png' style={newStyles.image}/></a>
                  <a href="https://gsuite.google.com/products/meet/?utm_source=google&utm_medium=cpc&utm_campaign=na-CA-all-en-dr-bkws-all-all-trial-b-dr-1003894&utm_content=text-ad-none-any-DEV_c-CRE_246623346166-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20%20~%20BMM%20%2F%2F%20Hangouts%20%5B1:1%5D%20%5BGoogle%20Hang%20outs%5D-KWID_43700024970837485-kwd-314419365113&utm_term=KW_%2Bgoogle%20%2Bhang%20%2Bout-ST_%2Bgoogle%20%2Bhang%20%2Bout&gclid=Cj0KCQiArenfBRCoARIsAFc1Fqd47igb1KS_4qOJka2FRHpBepgdydxz-pX_cH8v9xTVB5dSSDKIFBQaAiCgEALw_wcB&gclsrc=aw.ds"><img src='../../styles/Images/google-biz-icons/hangouts_on_air.png' style={newStyles.image}/></a>
                  <a href="https://plus.google.com/discover"><img src='../../styles/Images/google-biz-icons/google_plus.png' style={newStyles.image}/></a>
                  <a href="https://enterprise.google.com/search/products/gsa.html"><img src='../../styles/Images/google-biz-icons/gsa.png' style={newStyles.image}/></a>
                  <a href="https://itsallwidgets.com/flutter-app/google-greentea"><img src='../../styles/Images/google-biz-icons/greentea.png' style={newStyles.image}/></a>
                  <a href="https://www.google.com/sync/index.html"><img src='../../styles/Images/google-biz-icons/google_sync.png' style={newStyles.image}/></a>
                  <a href="https://marketingplatform.google.com/about/optimize/"><img src='../../styles/Images/google-biz-icons/google_optimize.png' style={newStyles.image}/></a>
                  <a href="https://hire.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=na-US_CA-all-en-dr-bkws-all-all-trial-e-na-1004374&utm_content=text-ad-none-none-DEV_all-CRE_267082720316-ADGP_google+hire-KWID_43700037000381487-kwd-298956802529&utm_term=KW_google%20hire-ST_google+hire&gclid=Cj0KCQiArenfBRCoARIsAFc1FqcV0h6mi8LqZznfYBIn3WjH1S0KgeSqbILXLuvvxLTu6aAr1a-ExkEaAl3gEALw_wcB"><img src='../../styles/Images/google-biz-icons/google_hire.png' style={newStyles.image}/></a>
                  <a href="https://domains.google/#/"><img src='../../styles/Images/google-biz-icons/google_domains.png' style={newStyles.image}/></a>
                  <a href="https://design.google/"><img src='../../styles/Images/google-biz-icons/google_data_studio.png' style={newStyles.image}/></a>
                  <a href="https://support.google.com/google-ads/answer/6154846?hl=en"><img src='../../styles/Images/google-biz-icons/google_best_practices.png' style={newStyles.image}/></a>
                  <a href="https://firebase.google.com/"><img src='../../styles/Images/google-biz-icons/firebase.png' style={newStyles.image}/></a>
                  <a href="https://files.google.com/"><img src='../../styles/Images/google-biz-icons/files_go.png' style={newStyles.image}/></a>
                  <a href="https://www.google.com/cloudprint/#printers"><img src='../../styles/Images/google-biz-icons/cloud_print.png' style={newStyles.image}/></a>
                </div>
              </CardContent>
            </Card>
      )
  }

}



export default GoogleBusiness;