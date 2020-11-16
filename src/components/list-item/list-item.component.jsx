import React from 'react';

import './list-item.styles.scss';

const ListItem = ({id, text, completed, toggleCompleted, deleteItem}) => {
    console.log(toggleCompleted)
    return (
        <div className="item" onClick={toggleCompleted}>
            <div>
            { !completed ? <p className="item-text">{text}</p> 
                :
                <p className="item-text-completed">{text}</p>
            }
            </div>           
            <div className="delete-button" onClick={deleteItem}>x</div>
        </div>
    )
};

export default ListItem;
