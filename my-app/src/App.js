import React, { useLayoutEffect } from 'react';
import './App.css';
import RepoDetails from './RepoDetails'
import RepoList from './RepoList'
import axios from 'axios'


class App extends React.Component { 
  componentDidMount () {
    axios.get('https://api.github.com/search/repositories?q=React')
    .then(res => { 
      
    this.setState({repos:res.data});
    })
  }
 
  
  
  state = {
    
  
   
    
    is_main : false,
     current_repo_id: 0,
      repos: [
       
      
      ]
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
  onChange(event) {
    this.setState({value: event.target.value});
    }
  

   
  

  
  render (){
    return (
      <div className="App">
        <button onClick={()=>this.buttonHandle()}>
          Перейти на главную
        </button>
        
        <header className="App-header">
          <input type="text" value={this.state.value} onChange={(event) => this.onChange(event)} />
           {this.setState({repos:res.data})}
          {this.state.is_main && <RepoDetails repo={this.state.repos[this.state.current_repo_id]}/>}
          {!this.state.is_main && <RepoList repos={this.state.repos} repoClick={(id) => this.repoClick(id)}/> }
        </header>
      </div>
    );
  }
};


export default App;
