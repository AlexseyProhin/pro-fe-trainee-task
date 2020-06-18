import React from 'react';
import './App.css';
import RepoDetails from './RepoDetails'
import RepoList from './RepoList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RepoDetails />
        <RepoList />

      </header>
    </div>
  );
}

export default App;
