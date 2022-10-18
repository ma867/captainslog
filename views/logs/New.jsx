const React = require('react')
const LogDefault = require('../layouts/Default')

class New extends React.Component{
    render(){
        return(<>

        <LogDefault title="Edit Captain's Log" navLinks="logs">
             <div className="col">
                <div className="log-card">

                    <h3>Create a New Log</h3>
                    <p className="sec-icon"><i className="fa-solid fa-circle-check"></i></p><br />
                    <form action="/logs" method='POST'>
                        Title: <input className="form-control" type="text" name="title" /><br />
                        Entry: <input className="form-control entry" type="text" name="entry"  /><br /><br />
                        Is the ship broken? <input type="checkbox" className="checkbox" name="shipIsBroken" /><br /><br />
                        <input className="delete" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </ LogDefault>
        {/* <form action="/logs" method='POST'>
            Title:<input type="text" name="title" /><br /><br />
            Entry:<input type="text" name="entry" /><br /><br />
            Is the ship broken?<input type="checkbox" name="shipIsBroken" /><br /><br />
            <input type="submit"/>
        </form> */}
        </>)
    }
}

module.exports = New