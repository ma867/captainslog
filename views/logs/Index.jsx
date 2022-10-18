const React = require('react');
const LogDefault = require('../layouts/Default')

class Index extends React.Component{
    render(){
        const {logs} = this.props
        return(
            <LogDefault title="Captain's Log Index" navLinks="logs">
                {
                    logs.map((log) => {

                        const {title, entry, shipIsBroken, time, _id} = log
                        return (
                          

                            <div className="col" key={log._id}>
                                <div className="service-card">
                                    <div className="icon-wrapper">
                                        <i className="fa-regular fa-circle-check"></i>
                                    </div>
                                    <h3><a href={`/logs/${log._id}`}>{title}</a></h3>
                                    <p>
                                        {shipIsBroken?'Ship is broken':'Ship is not broken'}
                                    </p>
                                    <p>
                                        "{entry}"
                                    </p>
                                    <p>
                                    {time.toString()} 
                                    </p>
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input className="delete "type="submit" value="Remove"/>
                                    </form>
                                </div>
                            </div>
                            
                        
                        )
                    })
                }
                
            </LogDefault>
        )
    }
}

module.exports = Index