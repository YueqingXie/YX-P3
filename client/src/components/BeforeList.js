import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



class BeforeList extends Component {
    state = {
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.password); 
    }
    render() {
        if( this.state.password == "8918308Ou@"){
            return <Redirect to = '/duzhe'/>
        }

        return (
            <section>

        <body>
        <div className="center container section" id="hhh">
            <img src="img/1.png" alt="" ></img>
            <p>Enter Password</p>
            <div className="center">
            <form onSubmit={this.handleSubmit} className="transparent center" id="pwform">
                <div className="input-field">
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
            </form>
            </div>
        </div>
        </body>

  
            </section>
        )
    }
}




export default BeforeList;