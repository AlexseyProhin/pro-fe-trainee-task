import React from 'react';
   const RepoList = (props) => {
        return <div classyName="repo-list">
                <h1>Поисковая строка, пустая топ 10 вывод</h1>

                <ul>
                    {props.repos.map(repo => (
                    <li>{repo.name} _ {repo.stars} </li>
                    ))}
                </ul>
            </div>

            }
export default RepoList;