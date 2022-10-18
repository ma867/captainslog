const React = require('react');
const LogDefault = require('../layouts/Default')

class Index extends React.Component{
    render(){
        const {foods} = this.props
        return(
            <>
              <LogDefault title="Captain's Food Log Index" navLinks="foods">
                {
                    foods.map((food) => {

                        const {name, calories, isItHealthy, time} = food
                        return (
                          

                            <div className="col" key={food._id}>
                                <div className="service-card">
                                    <div className="icon-wrapper">
                                        <i className="fa-regular fa-circle-check"></i>
                                    </div>
                                   
                                    <h3><a href={`/foods/${food._id}`}>{name}</a></h3>
                                    <h4>{calories} cal.</h4>
                                    <p>
                                        {isItHealthy?'This meal is healthy':'This meal is not healthy'}
                                    </p>
                                    <p>
                                     Meal was consumed at {time.toString()} 
                                    </p>
                                    <form action={`/foods/${food._id}?_method=DELETE`} method="POST">
                                        <input className="delete "type="submit" value="Remove"/>
                                    </form>
                                </div>
                            </div>
                            
                        
                        )
                    })
                }
                
            </LogDefault>






{/*            
            <div>
                <h1>Food Logs Index Page</h1>
                <nav>
                    <a href="/foods/new">Create a new food log</a>
                </nav>
                <ul>
                    {
                        foods.map((food) => {

                            const {name, calories, isItHealthy, time} = food
                            return (
                                <>
                                <li key={food._id}>
                                    <b><a href={`/foods/${food._id}`}>{name}</a>:</b>
                                    <ul>
                                        <li>{isItHealthy?'This meal is healthy':'This meal is not healthy'}</li>
                                        <li>{calories}</li>
                                        <li>{time.toString()}</li>
                                    </ul>                               
                                </li><br />
                                <form action={`/foods/${food._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`Delete "${name}" Log`} />
                                </form><br />
                                </>
                            )
                        })
                    }
                </ul>
            </div> */}
            </>
        )
    }
}

module.exports = Index