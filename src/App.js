import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';


class App extends Component {
  state={
    result:"",
    username:"",
    response:""
    
  }

  changeInput = (e) => {
    this.setState({ username: e.target.value })   
 }


 handleAddUser = (e) => {
    let email = this.state.username
    fetch(`https://cors-anywhere.herokuapp.com/https://us18.api.mailchimp.com/2.0/lists/subscribe.json?apikey=e3e51ca43f687f0ebbabeac29056f7cc-us18&id=074496cd86&email[email]=${email}&double_optin=true&send_welcome=false`)
      .then(response => response.json())
      .then(result =>

        {this.setState({ result, username:""})
         console.log(result)
        if(result.email !== undefined){
          this.setState({username: "success"})
        } else if (result.email === "list_Allready subscribed"){
          this.setState({username: "Already subscribed"})
        }
       
        
  })
      .catch(err =>{
        console.error('Fetch error', err)
  });
 }
      
             

  render() {
    // let template = if(this.state.username === "success"){
    //   return ()
    // }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Form value={this.state.username}
              changeInput={this.changeInput}
              username={this.state.username}
              handleAddUser={()=>{this.handleAddUser()} }
               />
          <div><p>{this.state.result.email}
                    {this.state.username}</p></div>
      </div>
    );
  }
}

export default App;
