import React from 'react';

import './list-item.styles.scss';

const ListItem = (props) => {
    console.log(props.elementsIndex)
    return (
        <div className="item" >
            <div className='text-item-container' onClick={() => props.toggleCompleted(props.id, props.elementsIndex)}>
            { !props.completed ? <p className="item-text">{props.text}</p> 
                :
                <p className="item-text-completed">{props.text}</p>
            }
            </div>           
            <div className="delete-button" onClick={() => props.deleteItem(props.id, props.elementsIndex)}>x</div>
        </div>
    )
};

export default ListItem;
