const React = require('react')

class Edit extends React.Component{
    render(){
        const {title, entry, shipIsBroken, _id, createdAt} = this.props.log
        return(<>
        <h1>Edit This Log</h1>
        <nav>
            <a href="/logs"> Go Back To Logs Home</a>
        </nav>
        <form action={`/logs/${_id}?_method=PUT`} method='POST'>
            Title:<input type="text" name="title" defaultValue={title}/><br /><br />
            Entry:<input type="text" name="entry" defaultValue={entry}/><br /><br />
            Is the ship broken?<input type="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken}/><br /><br />
            <input type="submit" value="Edit Log"/>
        </form>
        </>)
    }
}

module.exports = Edit