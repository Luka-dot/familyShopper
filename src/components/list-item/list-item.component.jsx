import React from 'react';

import deleteIcon from '../../assets/delete.svg';
import './list-item.styles.scss';

const ListItem = (props) => {
    return (
        <div className="item" >
            <div className='text-item-container' onClick={() => props.toggleCompleted(props.id, props.elementsIndex)}>
            { !props.completed ? <p className="item-text">{props.text}</p> 
                :
                <p className="item-text-completed">{props.text}</p>
            }
            </div>           
            <img className="delete-button" src={deleteIcon} onClick={() => props.deleteItem(props.id, props.elementsIndex, props.directoryId)}></img>
        </div>
    )
};

export default ListItem;
