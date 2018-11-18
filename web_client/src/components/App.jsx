
import React, {Component} from 'react';
import SideBar from './sideBar.jsx'
import GoogleApiWrapper from './map.jsx';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';

// import ThemeSwitcher from './themeswitcher.jsx'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuVisible : false
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleMouseDown(e){
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();

  }

  toggleMenu(){
    this.setState(
    {
      menuVisible: (!this.state.menuVisible)
    }
    );
  }

  render() {
    return (
      <div className="container-fluid">
       <div className="row">
        <nav className="navbar">
          <span id="navBarIcon"className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" onClick={this.handleMouseDown}></span>
          <img id="googleImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png" width="100" height="35" />
          <span id="dreamWord" className="align-middle"> DREAM</span>
        </nav>
        <SideBar className="bottom" menuVisibility={this.state.menuVisible} onClick={this.handleMouseDown}/>

        <GoogleApiWrapper />
       </div>
      </div>
    );
  }
}
export default App;
