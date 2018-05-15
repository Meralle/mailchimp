import React, { Component } from 'react';
class Form extends Component {
  render() {
    return (
      <div className="container">
       <h1><strong>Mailchimp</strong></h1><br/><br/>
	
       
    <form className="container row">
      	<div className="row">
      			
	      	<div className="col s10">	 	
	         	<input type="email" id="input" value={this.props.value} onChange={this.props.changeInput}/><br/>
         	</div>
         	<div className="col s2">
	      		<button className="bttn" onClick={this.props.handleAddUser} type="button" id="button"  className=" red lighten-1 btn  btn-small right"><i className="material-icons">send</i>submit</button>
	      	</div>
        </div>
    </form>

      </div>
    );
  }
}

export default Form;
