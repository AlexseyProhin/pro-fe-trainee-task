class Repolist extends React.Component {
    render () {
        return (
            <div className="repo-list">
                <h1>Поисковая строка, пустая топ 10 вывод {this.props.name}</h1>
                <ul>
                    <li>Название репо</li>
                    <li>кол-во звезд</li>
                    <li>дата и ссылка</li>

                </ul>

            </div>
        )
    }
}