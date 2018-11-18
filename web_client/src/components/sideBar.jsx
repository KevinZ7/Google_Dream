import React, {Component} from 'react';
import Entity from './entity.jsx'
import data from './data.json'



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
  }

   showEntity(){
    this.setState({
      entity: (!this.state.entity)
    })
  }


  render(){
    const Data = data.map((catagorey) =>
     <li onClick={this.handleEntityChange}><img id="icon" src={catagorey.img}/>{catagorey.catagorey} <span className="glyphicon glyphicon-triangle-right" aria-hidden="true"></span></li>
    )

    var visibility = "hide";
    if(this.props.menuVisibility){
      visibility = "show";
    }
    return(
          <div id="menuBox"className="col col-lg-3">
            <div id="sideBar" className={visibility} onClick={this.props.handleMouseDown}>
              {this.state.entity?
              <Entity  back={this.handleEntityChange}/>
              :
              <aside  className="main_sidebar">
                <ul>
                {Data}
                </ul>
              </aside>
              }
            </div>
          </div>
          )
  }
}
export default SideBar;