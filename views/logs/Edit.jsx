const React = require('react')
const LogDefault = require('../layouts/Default')

class Edit extends React.Component{
    render(){
        const {title, entry, shipIsBroken, _id, createdAt} = this.props.log
        return(
            <LogDefault title="Edit Captain's Log" navLinks="logs">
             <div className="col" key={_id}>
                <div className="log-card">

                    <h3>Edit Existing Log</h3>
                    <p className="sec-icon"><i className="fa-solid fa-circle-check"></i></p><br />
                    <form action={`/logs/${_id}?_method=PUT`} method='POST'>
                        Title: <input className="form-control" type="text" name="title" defaultValue={title} /><br />
                        Entry: <input className="form-control entry" type="text" name="entry" defaultValue={entry} /><br /><br />
                        Is the ship broken? <input type="checkbox" className="checkbox" name="shipIsBroken" defaultChecked={shipIsBroken} /><br /><br />
                        <input className="delete" type="submit" value="Edit Log" />
                    </form>
                </div>
            </div>
            
            </ LogDefault>
        
    
      
    
        )
    }
}

module.exports = Edit