import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {deleteItem, toggleCompleted} from '../../redux/actions/index';
import './list-item.styles.scss';

const ListItem = ({id, text, completed}) => {
    const dispatch = useDispatch();
    console.log('inside item id ', completed)

    return (
        <div className="item" onClick={() => dispatch(toggleCompleted(id))}>
            { !completed ? <p className="item-text">{text}</p> 
                :
                <p className="item-text-completed">{text}</p>
            }
            
            <div className="delete-button" onClick={() => dispatch(deleteItem(id))}>x</div>
        </div>
    )
};

export default ListItem;