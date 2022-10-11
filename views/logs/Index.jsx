const React = require('react');

class Index extends React.Component{
    render(){
        const {logs} = this.props
        return(
            <div>
                <h1>Logs Index Page</h1>
                <nav>
                    <a href="/logs/new">Create a new log</a>
                </nav>
                <ul>
                    {
                        logs.map((log) => {

                            const {title, entry, shipIsBroken, time} = log
                            return (
                                <>
                                <li key={log._id}>
                                    <b><a href={`/logs/${log._id}`}>{title}</a>:</b>
                                    <ul>
                                        <li>{shipIsBroken?'Ship is broken':'Ship is not broken'}</li>
                                        <li>" {entry} "</li>
                                        <li>" {time.toString()} "</li>
                                    </ul>                               
                                </li><br />
                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`Delete "${title}" Log`} />
                                </form><br />
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index