import React, {Component} from 'react';

class SpecificEntity extends Component{
  render(){

    return(
      <aside  className="main_sidebar justify-content-center">
      <button onClick={this.props.back} className="btn btn-success" > Back</button>
        <h1>Pizza</h1>
        <h3>500 Wishes</h3>
        <h4>Emails</h4>
      </aside>


      )
  }
}
export default SpecificEntity;