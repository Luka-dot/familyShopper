import React from 'react';

import './custom-button.styles.scss';

const CustomButton = () => {

    const handleAddButton = (e) => {
        console.log(e.target)
    }

    return (
        <div className="button-container">
            <button 
                className="custom-button"
                onClick={handleAddButton}
            >+</button>
        </div>
    )
};

export default CustomButton;