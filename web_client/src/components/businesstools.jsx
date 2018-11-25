import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const options = [
"dgdgdggd"
];

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}

        >

          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              height: ITEM_HEIGHT * 4.5,
              width: 240,
            },
          }}
        >
          <a href="https://www.google.ca/docs/about/"><img id="bizTools" src="https://image.flaticon.com/icons/svg/281/281760.svg"/></a>
          <a href="https://ads.google.com/intl/en_ca/home/#?modal_active=none"><img id="bizTools" src="https://image.flaticon.com/icons/svg/281/281757.svg"/></a>
          <a href="https://www.google.com/business/"><img id="bizTools" src="https://image.flaticon.com/icons/svg/281/281763.svg"/></a>
          <a href="https://ads.google.com/intl/en_ca/home/#?modal_active=none"><img id="bizTools" src="https://image.flaticon.com/icons/svg/281/281771.svg"/></a>
          <a href="https://photos.google.com/"><img id="bizTools" src="https://image.flaticon.com/icons/svg/281/281758.svg"/></a>
          <a href="https://analytics.google.com/analytics/web/provision/?authuser=0#/provision"><img id="bizTools" src="https://cdn.freebiesupply.com/logos/large/2x/google-analytics-3-logo-png-transparent.png"/></a>
          <a href="https://developers.google.com/"><img id="bizTools" src="https://seeklogo.com/images/G/google-developers-logo-3FB15D7DCE-seeklogo.com.png"/></a>
          <a href="https://edu.google.com/k-12-solutions/classroom/?modal_active=none"><img id="bizTools" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"/></a>
          <a href="https://calendar.google.com/calendar/r"><img id="bizTools" src="https://a.slack-edge.com/7f1a0/plugins/gcalendar/assets/service_512.png"/></a>
          <a href="https://hangouts.google.com/"><img id="bizTools" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Hangouts_icon.svg/2000px-Hangouts_icon.svg.png"/></a>
          <a href="https://www.blogger.com/about/?r=1-null_user"><img id="bizTools" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/2000px-Blogger.svg.png"/></a>
          <a href="https://www.google.com/forms/about/"><img id="bizTools" src="https://www.gstatic.com/images/branding/product/1x/forms_512dp.png"/></a>
          <a href="https://www.google.com/sheets/about//"><img id="bizTools" src="https://image.flaticon.com/icons/svg/281/281761.svg"/></a>
          <a href="https://www.google.com/slides/about/"><img id="bizTools" src="https://image.flaticon.com/icons/svg/281/281762.svg"/></a>
          <a href="https://myaccount.google.com/"><img id="bizTools" src="https://image.flaticon.com/icons/svg/281/281756.svg"/></a>
        </Menu>
      </div>
    );
  }
}

export default LongMenu;