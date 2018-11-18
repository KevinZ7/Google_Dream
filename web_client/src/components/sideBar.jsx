import React, {Component} from 'react';
import Entity from './entity.jsx'



class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      entity: false
    }
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
      entity: (!this.state.entity)
    })
  }



  render(){
    var visibility = "hide";
    if(this.props.menuVisibility){
      visibility = "show";
    }
    return(
            <div id="menuBox"className="col col-lg-2">
            <div id="sideBar" className={visibility} onClick={this.props.handleMouseDown}>
            {this.state.entity?
              <Entity  back={this.handleEntityChange}/>
                :
                <aside  className="main_sidebar">
                 <ul>
                  <li onClick={this.handleEntityChange}><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Catagorey Topic</li>
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
            }
      </div>
      </div>
      )
  }
}
export default SideBar;