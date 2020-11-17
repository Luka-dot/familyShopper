import React from 'react';
import { connect } from 'react-redux'

import './logIn-page.styles.scss';

const LogInPage = (props) => {

    return (
        <div className="logIn-main-wrapper">
            {
                props.isLogged ? <h3>Welcome back</h3> : <h3>Log in with your email and password</h3>
            }
            
            <form className="form-container" onSubmit={() => {}}>
                <input placeholder="email" />
                <input placeholder="password" />
            </form>
        </div>
    )
};

const mapStateToProps = state => ({
    isLogged: state.logged
})

export default connect(mapStateToProps)(LogInPage);