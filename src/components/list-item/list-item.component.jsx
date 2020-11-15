import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {deleteItem} from '../../redux/actions/index';
import './list-item.styles.scss';

const ListItem = ({id, text}) => {
    const dispatch = useDispatch();
    console.log('inside item id ', id)

    return (
        <div className="item">
            <p className="item-text">{text}</p>
            <div className="delete-button" onClick={() => dispatch(deleteItem(id))}>x</div>
        </div>
    )
};

export default ListItem;