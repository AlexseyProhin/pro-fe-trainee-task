import React from 'react';
import './App.css';
import RepoDetails from './RepoDetails'
import RepoList from './RepoList'
import axios from 'axios'
import {debounce} from 'throttle-debounce';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.fetchGithub = debounce(2000, this.fetchGithub);
    }

    componentDidUpdate(prevProps, prevState) {
        if  (prevState.page !== this.state.page)
        {this.fetchGithub()}
        else if (prevState.searcQuery !== this.state.searcQuery)
        { this.fetchGithub() }





    }

    fetchGithub() {
        axios.get('https://api.github.com/search/repositories?sort=stars&q='   + this.state.searcQuery + '&per_page=10&page=' + this.state.page,
            {
                headers:
                // eslint-disable-next-line no-undef
                    {Authorization: `Token ${(this.state.usersKeyApi)}`}
            }
        )
            .then(res => {

                this.setState({repos: res.data});
            })

    }


    state = {
        page : 0,
        pagestate : 'newgetpag',
        usersKeyApi: '7338fca6dae435ae097a2dcf47844de50da5f1b5',
        searcQuery: 'React',
        is_main: false,
        current_repo_id: 0,
        repos: {
            items: []
        }


    }
    pageClick(pageNumber) {
        this.setState({ page: pageNumber})
    }

    buttonHandle(id) {
        this.setState({ is_main: !this.state.is_main

        })
    }

    repoClick(id) {
        this.setState({
            current_repo_id: id,
            is_main: true,
        })
    }

    onSearchInputChange(event) {
        this.setState({searcQuery: event.target.value});
    }


    render() {
        return (
            <div className="App">
                <button onClick={() => this.buttonHandle()}>
                    Перейти на главную
                </button>

                <header className="App-header">
                    <input value={this.state.value} onChange={(event) => this.onSearchInputChange(event)}/>

                    {this.state.is_main &&
                    <RepoDetails repo={this.state.repos[this.state.current_repo_id]}/>}
                    {!this.state.is_main &&
                    <RepoList repos={this.state.repos.items} repoClick={(id) => this.repoClick(id)}/>}
                </header>
                <footer>
                   <div id="pages">
                       {this.state.page  == 1 &&
                       <span>
                           [
                       </span>}
                       <a href= "onClick={() => this.pageClick(1)}" target="_blank">{this.state.pipeline}</a>
                       
                       
                        <button onClick={() => this.pageClick(1)}> }
                           1
                       </button>
                       {this.state.page  == 1 &&
                       <span>
                           ]
                       </span>}
                       {this.state.page  == 2 &&
                       <span>
                           [
                       </span>}
                       <button onClick={() => this.pageClick(2)}>
                           2
                       </button>
                       {this.state.page  == 2 &&
                       <span>
                           ]
                       </span>}
                       {this.state.page  == 3 &&
                       <span>
                           [
                       </span>}
                       <button onClick={() => this.pageClick(3)}>
                           3
                       </button>
                       {this.state.page  == 3 &&
                       <span>
                           [
                       </span>}
                       {this.state.page  == 4 &&
                       <span>
                           [
                       </span>}
                       <button onClick={() => this.pageClick(4)}>
                           4
                       </button>
                       {this.state.page  == 4 &&
                       <span>
                           ]
                       </span>}
                       {this.state.page  == 5 &&
                       <span>
                           [
                       </span>}
                       <button onClick={() => this.pageClick(5)}>
                           5
                       </button>
                       {this.state.page  == 5 &&
                       <span>
                           ]
                       </span>}

                   </div>
                </footer>
            </div>
        );
    }
};


export default App;
