import React,{Component} from 'react';

export default class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    }

    change = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
        this.props.liveChange({
            [event.target.name] : event.target.value
        });
    }

    formSubmitted = (event) => {
        event.preventDefault();
        // this.props.formSubmit(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: ""
        });

        this.props.liveChange({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: ""
        });
    }
    
    render(){
        return(
            <form>
                <input 
                name="firstName"
                value={this.state.firstName} 
                placeholder="First Name" 
                onChange={this.change} />
                <br/>

                <input 
                name="lastName"
                value={this.state.lastName} 
                placeholder="Last Name" 
                onChange={this.change} />
                <br/>

                <input 
                name="userName"
                value={this.state.userName} 
                placeholder="User Name" 
                onChange={this.change} />
                <br/>

                <input 
                name="email"
                value={this.state.email} 
                placeholder="Email" 
                onChange={this.change} />
                <br/>

                <input 
                type="password"
                name="password"
                value={this.state.password} 
                placeholder="Password" 
                onChange={this.change} />
                <br/>

                <button onClick={this.formSubmitted}>Submit</button>

            </form>
        )
    }
}

