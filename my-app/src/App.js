import React, { useLayoutEffect } from 'react';
import './App.css';
import RepoDetails from './RepoDetails'
import RepoList from './RepoList'
import axios from 'axios'


class App extends React.Component { 
  componentDidMount () {
    axios.get('https://api.github.com/orgs/octokit/repos')
    .then(res => { 
      const  = res.data;
      this.setState ({ persons });
    })
  }
  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }


  state = {
    is_main : false,
     current_repo_id: 0,
    repos: [
      {
        id:0,
        name: 'репозиторий1',
        stars: 2,
        data: 25.062020,
        projekt: '/tg-bomze/Face-Depixelizer">tg-bomze / Face-Depixelizer'

      },
      {
        id:1,
        name: 'репозиторий2',
        stars: 3,
        data: 21.062020,
        projekt: '/Covid-19Radar/Covid19Radar">Covid-19Radar / Covid19Radar'
      },
      {
        id:2,
        name: 'репозииторий3',
        stars: 4,
        data: 22.062020,
        projekt: '/adamian98/pulse">adamian98 / pulse'

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
