import React, { Component } from 'react';
class Form extends Component {
  render() {
    return (
      <div className="container">
       <h1><strong>Mailchimp</strong></h1><br/><br/>    
	    <form className="container">
	    	<div className="row">
	      	<div className="input-field inline s8">		 	
		    	<input type="email" id="input" value={this.props.value} onChange={this.props.changeInput}/>	
	        </div>

	        <button onClick={this.props.handleAddUser} type="button" id="button"  className=" red lighten-1 btn  btn-small "><i className="material-icons">send</i>submit</button>		
	       </div>
	    </form>

      </div>
    );
  }
}

export default Form;
