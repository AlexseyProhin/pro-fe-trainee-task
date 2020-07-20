import React from 'react';

const RepoList = (props) => {
    return <div className="repo-list">
        <h1> пустой поиск топ 10 вывод</h1>

        <ul>

            {props.repos.length && props.repos.map(repo => (

                <li key={repo.id}>{repo.full_name} _ {repo.url} _ {repo.score} _ {repo.updated_at}
                    <button onClick={() => props.repoClick(repo.id)}> click</button>
                </li>


            ))}
        </ul>
    </div>

}
export default RepoList;