const React = require('react');
const LogDefault = require('../layouts/Default')

class Show extends React.Component {
   render(){

    //deconstructing the object being past it
    const {title, entry, shipIsBroken, _id, time} = this.props.log
    return(
    <LogDefault title="Captain's Log Show Page" navLinks="logs">
        <div className="row mt-5 mt-md-4 row-cols-1  justify-content-center">
            <div className="col" key={_id}>
                <div className="log-card">
                    <div className="icon-wrapper">
                        <i className="fa-regular fa-circle-check"></i>
                    </div>
                    <h3>{title[0].toUpperCase()+ title.substring(1)}</h3>
                    <h4>This ship {shipIsBroken? "is broken":"is not broken"} </h4>
                    <p>
                    "{entry}"
                    </p>
                    <button className="delete"><a href={`/logs/${_id}/edit`}><i className="fa-solid fa-pencil"></i> Edit </a></button><br /><br />
                    <button className="delete"><a href={`/logs/${_id}`}><i className="fa-solid fa-eye"></i> Details</a></button><br />
                </div>
            </div>
        </div>
        {/* <h1>"{title[0].toUpperCase()+ title.substring(1)}" </h1>
        <h3>{time.toString()}</h3>
        <p>"{entry}" and this ship {shipIsBroken? "is broken":"is not broken"} </p>
        <nav>
            <a href="/logs">Back to logs homepage</a><br /><br />
            <a href={`/logs/${_id}/edit`}>{`Edit the "${title[0].toUpperCase()+ title.substring(1)}" log`}</a>
        </nav> */}
    </LogDefault>
    )
   }
}

module.exports = Show