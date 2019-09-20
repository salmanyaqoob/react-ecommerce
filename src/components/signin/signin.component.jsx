import React from 'react';
import './signin.style.scss';

import FormInput from '../../components/from-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';

class Signin extends React.Component{
    constructor(Props){
        super(Props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit nwo');
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an Account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    required 
                    value={this.state.email} 
                    label="Email" 
                    onChange={this.handleChange} />
                    <FormInput 
                    name="password" 
                    type="password" 
                    required 
                    value={this.state.password} 
                    label="password"
                    onChange={this.handleChange} />

                    <div className="buttons">
                        <CustomButton type="submit" value="Login Now" />
                        <CustomButton type="button" loginWithGoogle="true" value="Sign in with Google" onClick={ signInWithGoogle } />
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Signin;