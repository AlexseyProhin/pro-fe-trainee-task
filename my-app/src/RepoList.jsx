import React from 'react';
   const RepoList = (props) => {
        return <div className="repo-list">
                <h1>Поисковая строка, пустая топ 10 вывод</h1>

                <ul>
                 
                    {props.repos.length && props.repos.map(repo => (
                        
                     <li key={repo.id} >{repo.data} _ {repo.stars} <button onClick={() => props.repoClick(repo.id)} > click</button> </li>



                    ))}
                </ul>
            </div>

            }
export default RepoList;