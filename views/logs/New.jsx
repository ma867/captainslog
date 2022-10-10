const React = require('react')

class New extends React.Component{
    render(){
        return(<>
        <form action="/logs" method='POST'>
            Title:<input type="text" name="title" /><br /><br />
            Entry:<input type="text" name="entry" /><br /><br />
            Is the ship broken?<input type="checkbox" name="shipIsBroken" /><br /><br />
            <input type="submit"/>
        </form>
        </>)
    }
}

module.exports = New