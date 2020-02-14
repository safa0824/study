import React, { Component } from 'react';
import './App.css'

class App extends Component{  
  state = { username:'', password:'' }
  handleChange = (event) => {     
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });  
  }

  isSafe = password => {
    

  };  

  render(){
      const { username, password } = this.state;
      return(
          <form>
            <div className="input_row">
                <input type="text" name="username" value={ username } onChange={this.handleChange}/>
                <input type="password" name="password" value={ password } onChange={this.handleChange}/>
                <button disabled={ (password.length >= 6 ) && ( password.indexOf(username) < 0 ) ? null : "disabled" } name="loginBtn" type="submit">로그인</button>
            </div>
          </form>
      )
  }
}

export default App;