const React = require('react')
const LogDefault = require('../layouts/Default')


class Edit extends React.Component{
    render(){
        const {name, calories, isItHealthy, _id} = this.props.food
        return(<>
        <LogDefault title="Edit Food Log" navLinks="foods">
             <div className="col" key={_id}>
                <div className="log-card">

                    <h3>Edit Existing Log</h3>
                    <p className="sec-icon"><i className="fa-solid fa-circle-check"></i></p><br />
                    <form action={`/foods/${_id}?_method=PUT`} method='POST'>
                        Name: <input className="form-control" type="text" name="name" defaultValue={name} /><br />
                        Calories <input className="form-control entry" type="number" name="calories" defaultValue={calories}/><br />
                        Is the ship broken? <input type="checkbox" className="checkbox" name="isItHealthy" defaultChecked={isItHealthy}/><br /><br />
                        <input className="delete" type="submit" value="Edit Log" />
                    </form>
                </div>
            </div>
            
        </ LogDefault>
        {/* <h1>Edit This Log</h1>
        <nav>
            <a href="/foods"> Go Back To Logs Home</a>
        </nav>
        <form action={`/foods/${_id}?_method=PUT`} method='POST'>
            Name:<input type="text" name="name" defaultValue={name}/><br /><br />
            Calories:<input type="number" name="calories" defaultValue={calories}/><br /><br />
            Is this meal healthy?<input type="checkbox" name="isItHealthy" defaultChecked={isItHealthy}/><br /><br />
            <input type="submit" value="Edit Food Log"/>
        </form> */}
        </>)
    }
}

module.exports = Edit