import React, {Component} from 'react';


class SideBar extends Component {
  render(){
    var visibility = "hide";
    if(this.props.menuVisibility){
      visibility = "show";
    }
    return(

            <div id="sideBar" className={visibility} onClick={this.props.handleMouseDown}>
              <aside  className="main_sidebar">

                <ul>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Restaurant
                    <ul className="entity">
                      <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Subway</li>
                      <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>A & W</li>
                      <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Wendys</li>
                    </ul>
                  </li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                </ul>
                <div id="border"></div>
                 <ul>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                </ul>
                <div id="border"></div>
                  <ul>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                  <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
                </ul>
              </aside>
      </div>

      )
  }
}
export default SideBar;