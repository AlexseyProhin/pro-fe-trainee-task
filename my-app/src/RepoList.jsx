import React from 'react';
   const RepoList = (props) => {
        return <div className="repo-list">
                <h1>Поисковая строка, пустая топ 10 вывод</h1>

                <ul>
                 
                    {props.repos.map(repo => (
                        
                     <li key={repo.id} >{repo.name} _ {repo.stars} <button onClick={() => props.repoClick(repo.id)} > click</button> </li>
                    //<li><a href="https://github.com/tg-bomze/Face-Depixelizer">tg-bomze / Face-Depixelizer</a></li>
                    //<li><a href="https://github.com/Covid-19Radar/Covid19Radar">Covid-19Radar / Covid19Radar</a></li>
                    //<li> <a href="https://github.com/adamian98/pulse">adamian98 / pulse</a></li>
                    ))}
                </ul>
            </div>

            }
export default RepoList;