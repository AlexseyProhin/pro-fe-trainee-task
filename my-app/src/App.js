import React, { useLayoutEffect } from 'react';
import './App.css';
import RepoDetails from './RepoDetails'
import RepoList from './RepoList'
class App extends React.Component { 
  state = {
    is_main : false,
     current_repo_id: 0,
    repos: [
      {
        id:0,
        name: 'репозиторий1',
        stars: 2
      },
      {
        id:1,
        name: 'репозиторий2',
        stars: 3
      },
      {
        id:2,
        name: 'репохиторий3',
        stars: 4
      }
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
  render (){
    return (
      <div className="App">
        <button onClick={()=>this.buttonHandle()}>
          Перейти на главную
        </button>
        <header className="App-header">
          {this.state.is_main && <RepoDetails repo={this.state.repos[this.state.current_repo_id]}/>}
          {!this.state.is_main && <RepoList repos={this.state.repos} repoClick={(id) => this.repoClick(id)}/> }
        </header>
      </div>
    );
  }
};


export default App;
