import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'> 
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    {/* <label>Email</label>
                    <input name='email' type='email' value={this.state.email} required onChange={this.handleChange}/> */}
                    <FormInput label= 'Email' name='email' type='email' value={this.state.email} required handleChange={this.handleChange}/>
                    {/* <label>Password</label>
                    <input name='password' type='password' value={this.state.password} required onChange={this.handleChange}/> */}
                    <FormInput label='Password' name='password' type='password' value={this.state.password} required onChange={this.handleChange}/>
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>

            </div>
        );
    }

}

export default SignIn;