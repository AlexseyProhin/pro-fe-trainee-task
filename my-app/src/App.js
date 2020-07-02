import React, { useLayoutEffect } from 'react';
import './App.css';
import RepoDetails from './RepoDetails'
import RepoList from './RepoList'
import Form from './Form.js'
import axios from 'axios'


class App extends React.Component { 
  componentDidMount () {
    axios.get('https://api.github.com/search/repositories?q=newSearh')
    .then(res => { 
      
    this.setState({repos:res.data});
    })
  }
 
  //value = {this.state.email}; onChange={this.handleUserInput}  Я не понял где это должно находиться
  
  state = {
    
   
    
    is_main : false,
     current_repo_id: 0,
    repos: []
  } 
     buttonHandle(id){
    this.setState({
      is_main: !this.state.is_main
    })
  }
  repoClick(id){
    this.setState({
current_repo_id: id,
is_main: true,
    })
  }
  /*OnCgange(event) {
    this.setState({value: event.target.value})
    }};*/

   
  

  
  render (){
    return (
      <div className="App">
        <button onClick={()=>this.buttonHandle()}>
          Перейти на главную
        </button>
        
        <header className="App-header">
          <input />
          <Form /> 
          {this.state.is_main && <RepoDetails repo={this.state.repos[this.state.current_repo_id]}/>}
          {!this.state.is_main && <RepoList repos={this.state.repos} repoClick={(id) => this.repoClick(id)}/> }
        </header>
      </div>
    );
  }
};


export default App;
