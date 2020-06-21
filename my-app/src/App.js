import React from 'react';
import './App.css';
import RepoDetails from './RepoDetails'
import RepoList from './RepoList'
class App extends React.Component {
  state = {
    is_main : true
     repos: [
       {
        name: 'репозиторий1',
        stars: 2
       },
            {
        name: 'репозиторий2',
        stars: 3
            },
              {
        name: 'репохиторий3'
        stars: 4
              }
     ]
  }
  buttonHandle(){
    this.setState({
      is_main: !this.state.is_main
    })
  }
  render (){
    return (
      <div className="App">
        <button onClick={()=>this.buttonHandle()}>
          Перейти
        </button>

        <header className="App-header">
          {this.state.is_main && <RepoDetails />}
          {!this.state.is_main && <RepoList repos={this.state.repos} /> }
        </header>
      </div>
    );
  }
};


export default App;
