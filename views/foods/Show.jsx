const React = require('react');
const LogDefault = require('../layouts/Default')

class Show extends React.Component {
   render(){

    //deconstructing the object being past it
    const {name, calories, isItHealthy, _id, time} = this.props.food
    return(
    <>
    <LogDefault title="Captain's Log Show Page" navLinks="foods">
        <div className="row mt-5 mt-md-4 row-cols-1  justify-content-center">
            <div className="col" key={_id}>
                <div className="log-card">
                    <div className="icon-wrapper">
                        <i className="fa-regular fa-circle-check"></i>
                    </div>
                <h3>"{name[0].toUpperCase()+ name.substring(1)}" </h3>
                <p>{time.toString()}</p>
                <p>This meal has {calories.toString()} calories and it {isItHealthy? "is healthy":"is not healthy"} </p>
                <button className="delete"><a href={`/foods/${_id}/edit`}><i className="fa-solid fa-pencil"></i> Edit </a></button><br /><br />
                <button className="delete"><a href={`/foods/${_id}`}><i className="fa-solid fa-eye"></i> Details</a></button><br />
                </div>
            </div>
        </div>
    </LogDefault>
    </>
    )
   }
}

module.exports = Show