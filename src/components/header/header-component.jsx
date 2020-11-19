import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {

    return (
        <div>
        { currentUser ? (
            <div className="header-main-container">
                <Link to='/'><p>All list's</p></Link>
                <p>{currentUser.displayName}</p>
                <p>log in</p>
            </div>
             ) : 
             <div className="header-main-container">
                <p>All list's</p>
                <p>please log-In</p>
                <p>log in</p>
            </div>
        } 
        </div>
        
    )
};

export default Header;