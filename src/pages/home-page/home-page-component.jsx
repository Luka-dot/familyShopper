import React from 'react';

import DirectiryList from '../../components/directory/directory-componenet';

import './home-page.styles.scss';

const HomePage = () => {

    return (
        <div className='home-wrapper' >
            <div className="home-main-container" >
                <DirectiryList />
            </div>
            <button className="addListButton" >ADD new list</button>
        </div>
    )
};

export default HomePage;