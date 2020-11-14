import React from 'react';

import './list.styles.css';

const List = ({ id, text, completed, handleToggle}) => {

    return (
        <div className="list-body"
        onClick={() => handleToggle(id)}
        >
            {
                completed 
                ? (<div className="list-completed"></div>)
                : (<div className="list-notCompleted"></div>)
            }
      
                {/* <p className='list-title'>{title}</p> */}
                <p className="list-text">{text}</p>
           
        </div>
    )
};

export default List;