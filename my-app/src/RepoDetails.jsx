import React from 'react';

const RepoDetails = (props) => {


    return <div className="repo-details">

        <h1>Карточка репо</h1>
        <ul>
            <li>название</li>
            <li>звезды</li>
            <li>дата</li>
            <li>ссылка <a href='https://github.com'>github</a></li>
            <li>языки</li>
            <li>описание</li>
            <li>10 активных контребьютеров</li>
            <li>photo</li>
            <li>nick</li>
        </ul>
    </div>
}
export default RepoDetails;