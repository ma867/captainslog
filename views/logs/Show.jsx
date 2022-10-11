const React = require('react');

class Show extends React.Component {
   render(){

    //deconstructing the object being past it
    const {title, entry, shipIsBroken, _id, time} = this.props.log
    return(
    <>
        <h1>"{title[0].toUpperCase()+ title.substring(1)}" </h1>
        <h3>{time.toString()}</h3>
        <p>"{entry}" and this ship {shipIsBroken? "is broken":"is not broken"} </p>
        <nav>
            <a href="/logs">Back to logs homepage</a><br /><br />
            <a href={`/logs/${_id}/edit`}>{`Edit the "${title[0].toUpperCase()+ title.substring(1)}" log`}</a>
        </nav>
    </>
    )
   }
}

module.exports = Show