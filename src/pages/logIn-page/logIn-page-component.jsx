import React from 'react';

import './logIn-page.styles.scss';

const LogInPage = () => {

    return (
        <div className="logIn-main-wrapper">
            <h3>Log in with your email and password</h3>
            <form className="form-container" onSubmit={() => {}}>
                <input placeholder="email" />
                <input placeholder="password" />
            </form>
        </div>
    )
};

export default LogInPage;