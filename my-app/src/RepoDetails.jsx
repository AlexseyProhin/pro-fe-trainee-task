import React from 'react';
const RepoDetails = (props) => {
       
  
    var test = props.repo.projekt;

    return <div className="repo-details">
         
            <h1>Карточка репо</h1>
            <ul>
                <li>название - {props.repo.name} </li>
                <li>звезды - {props.repo.stars} </li>
                <li>дата  {props.repo.data} </li>
                <li>ссылка  <a href ={ 'https://github.com' + test }>github</a></li> 
                <li>языки</li>
                <li>описание</li>
                <li>10 активных контребьютеров</li>
                <li>photo</li>
                <li>nick</li>
            </ul>
</div>
}
export default RepoDetails;