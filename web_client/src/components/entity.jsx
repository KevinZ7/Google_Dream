import React, {Component} from 'react';
import SpecificEntity from './entitySpecific.jsx'
import {Button} from  'reactstrap';


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

  }
  render(){
    return(
        <div>
         {this.state.entitySpecific?
          <SpecificEntity back={this.handleEntityChange} />
          :
          <aside  className="main_sidebar justify-content-center">
          <button type="button" className="btn btn-success" onClick={this.props.back}>CATAGORIES</button>
          <ul>
            <li onClick={this.handleEntityChange}><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Pizza</li>
            <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Mcdonalds</li>
            <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Subway</li>
            <li><span className="glyphicon glyphicon-search" aria-hidden="true"></span>Wendys</li>
          </ul>
           </aside>
          }
      </div>
      )
  }
}
export default Entity;



