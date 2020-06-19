import React from 'react';
import './App.css';
import RepoDetails from './RepoDetails'
import RepoList from './RepoList'
class App extends React.Component {
  state = {
    is_main : true
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
          {!this.state.is_main && <RepoList /> }
        </header>
      </div>
    );
  }
};


export default App;
