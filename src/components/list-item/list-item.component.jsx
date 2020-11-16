import React from 'react';
import { connect } from 'react-redux';

import {deleteItem, toggleCompleted} from '../../redux/actions/index';
import './list-item.styles.scss';

const ListItem = ({id, text, completed, toggleCompleted, deleteItem}) => {

    return (
        <div className="item" onClick={toggleCompleted(id)}>
            { !completed ? <p className="item-text">{text}</p> 
                :
                <p className="item-text-completed">{text}</p>
            }           
            <div className="delete-button" onClick={deleteItem(id)}>x</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCompleted: id => dispatch(toggleCompleted(id)),
    deleteItem: id => dispatch(deleteItem(id))
});

export default connect(null, mapDispatchToProps)(ListItem);