import React, {Component} from 'react';

class SpecificEntity extends Component{
  render(){

    return(
      <aside  className="main_sidebar justify-content-center">
      <button onClick={this.props.back} className="btn btn-success" > Back</button>
        <ul>
          <li className="entityInfo"><h4>Bubble Tea</h4></li>
          <li className="entityInfo">1684 Markers</li>
          <li className="entityInfo">401 W Georgia ST Vancouver, Bc V6B 5A1</li>
          <li className="entityInfo">Date Marked: Oct 18, 2018</li>
          <li className="entityInfo"><a>Email list of people interested ></a> </li>
        </ul>
      </aside>


      )
  }
}
export default SpecificEntity;