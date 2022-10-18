const React = require('react')

class LogDefault extends React.Component{
    render(){
        const {log, title, navLinks} = this.props
        return(<>
            <html>  
                <head>
                    <title>{title}</title>
                    <link rel="stylesheet" href="/css/style.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css" />
                </head>
                <body>
                    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="section-header text-center">
                                    <h2 className="fw-bold fs-1">The <span className="b-class-secondary">Captains</span> Logs</h2>
                                    <p className="sec-icon"><i className="fa-solid fa-rocket"></i></p><br /><br />
                                    <nav>
                                        <a href={`/${navLinks}`}><i className="fa-solid fa-home"></i> Home</a>
                                        <a href={`/${navLinks}/new`}><i className="fa-solid fa-square-plus"></i> Create New log</a>
                                    </nav>
                                </div>
                             </div>
                            <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                                {this.props.children}
                            </div>
                        </div>
                    </section>
                </body>
            </html>
        </>)
    }
}

module.exports = LogDefault