import React, {Component} from 'react';
import Main from './main.jsx';
import Demo from './demos.jsx';
import ReactDOM from 'react-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';
import GoogleApiWrapper from './map.jsx';


// import ThemeSwitcher from './themeswitcher.jsx'


class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Demo />
      </div>
    );
  }
}
export default App;