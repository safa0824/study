import React, { Component } from 'react';
import './App.css'

class App extends Component{  
  state = { username:'', password:'' }
  handleChange = (event) => {     
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // const passLeng = event.target.value.length;
    // passLeng > 6 ? console.log( passLeng+" - 여섯자리됨") : console.log( passLeng+" - 여섯자리안됨")
    // console.log( userPass.indexOf(userName) ) 
  };    
  isSafe = password => {
    // username을 포함하고 있지 않을 때는 어떻게 적용을 시켜야할지 모르겠습니다 ㅜㅜ 
  }
  render(){
      const { userName, password } = this.state;
      return(
          <form onSubmit="">
            <div className="input_row">
                <input type="text" name="userName" value={ userName } />
                <input type="password" name="password" value={ password } onChange={this.handleChange}/>
                <button disabled={ password.length >= 6  ? null : "disabled" } name="loginBtn" type="submit">로그인</button>
            </div>
          </form>
      )
  }
}

export default App;