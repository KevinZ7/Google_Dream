import React, {Component} from 'react';
import SpecificEntity from './entitySpecific.jsx'
import {Button} from  'reactstrap';
import data from './entityData.json'


class Entity extends Component{
  constructor(props){
    super(props)
    this.state = {
      entitySpecific:  false
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
      entitySpecific: (!this.state.entitySpecific)
    })

    //  let highlight = "hide";
    // if(this.state.entitySpecific)
    // highlight = "show";

  }
  render(){
     const Data = data.map((catagorey) =>
     <li onClick={this.handleEntityChange}><img id="icon" src={catagorey.img}/>{catagorey.catagorey}<span id="arrow" className="glyphicon glyphicon-triangle-right"></span></li>
    )
    return(
        <div>
         {this.state.entitySpecific?
          <SpecificEntity back={this.handleEntityChange} />
          :
          <aside  className="main_sidebar justify-content-center">

          <ul>
          <li className="backButton" onClick={this.props.back}>X</li>
            {Data}
          </ul>
           </aside>
          }
      </div>
      )
  }
}
export default Entity;



