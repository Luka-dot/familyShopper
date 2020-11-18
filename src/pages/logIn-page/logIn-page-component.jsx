import React, { useState} from 'react';
import { connect } from 'react-redux'

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './logIn-page.styles.scss';

const LogInPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hadleEmailChange = (e) => {
        const textInput = e.target.value;
        setEmail(textInput)
    }

    const handlePasswordChange = (e) => {
        const textInput = e.target.value;
        setPassword(textInput)
    }

    const handlePressLogin = (email, password) => {
        console.log(email, password)
    };

    return (
        <div className="logIn-main-wrapper">
            {
                props.isLogged ? <h3>Welcome back</h3> : <h3>Log in with your email and password</h3>
            }
            
            <form className="form-container" onSubmit={() => {}}>
                <input type="email" placeholder="email" value={email} onChange={(e) => hadleEmailChange(e)}/>
                <input type="password" placeholder="password" value={password} onChange={(e) => handlePasswordChange(e)} />
            </form>
            <button 
                className="custom-button"
                type="submit"
                onClick={() => handlePressLogin(email, password)}
            >Log in</button>
            <button 
                className="custom-button"
                type="submit"
                onClick={signInWithGoogle}
            >Sign In with Google</button>
        </div>
    )
};

const mapStateToProps = state => ({
    isLogged: state.logged
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);