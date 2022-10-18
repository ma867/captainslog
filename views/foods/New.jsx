const React = require('react')
const LogDefault = require('../layouts/Default')

class New extends React.Component{
    render(){
        return(<>
        <LogDefault title="Edit Captain's Food Log" navLinks="foods">
             <div className="col">
                <div className="log-card">
                    <h3>Create a New Log</h3>
                    <p className="sec-icon"><i className="fa-solid fa-circle-check"></i></p><br />
                    <form action="/foods" method='POST'>
                        Name:<input className="form-control" type="text" name="name" /><br /><br />
                        Calories:<input className="form-control" type="number" name="calories" /><br /><br />
                        Is it healthy?<input className="checkbox" type="checkbox" name="isItHealthy" /><br /><br />
                        <input className="delete" type="Submit"/>
                    </form>
                </div>
            </div>
        </ LogDefault>
        </>)
    }
}

module.exports = New