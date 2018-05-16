
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';


class App extends Component {
  state={
    result:"",
    username:"",
    
    
  }

  changeInput = (e) => {
    this.setState({ username: e.target.value })   
}


  handleAddUser = (e) => {
    let email = this.state.username
    let apiKey = process.env.REACT_APP_APIKEY
    let id = process.env.REACT_APP_LISTID
    fetch(`https://cors-anywhere.herokuapp.com/https://us18.api.mailchimp.com/2.0/lists/subscribe.json?apikey=${apiKey}&id=${id}&email[email]=${email}&double_optin=true&send_welcome=false`)
      .then(response => response.json())
      .then(result =>

        {this.setState({ result, username:""})
         console.log(result)
        if(result.email !== undefined){
          this.setState({ username: "Successfully done,AlreadySubscribed" })
        } else if (result.name){
          this.setState({ username: result.name })
        }      
    })
      .catch(err =>{
        console.error('Fetch error', err)
    });
}
      
             

  render() {  
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <p className="App-intero">
             
            </p>
          </header>
          <Form value={this.state.username}
                changeInput={this.changeInput}
                username={this.state.username}
                handleAddUser={()=>{this.handleAddUser()} }
                 />
          <div>
            <p>{this.state.result.email}</p>
          {/*  <p>{this.state.username}</p>*/}
          </div>           
      </div>
    );
  }
}

export default App;
