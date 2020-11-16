import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import ListItem from '../list-item/list-item.component';
import {deleteItem, toggleCompleted} from '../../redux/actions/index';

import './main-list.styles.scss';

const MainList = (props) => {
    console.log(props.toggleCompleted)

    const handleToggle = (id) => {
        props.toggleCompleted(id);
    };

    const handleDelete = (id) => {
        props.deleteItem(id);
    };

    return (      
        <div className="main-list">
            {
                props.mainList.map((props) => (
                    <ListItem 
                        key={props.id} 
                        {...props} 
                        toggleCompleted={() => handleToggle(props.id)} 
                        deleteItem={() => handleDelete(props.id)}  
                    />
                ))
            }
        </div>
    )
};

const mapStateToProps = state => ({
    mainList: state.mainList
});

const mapDispatchToProps = dispatch => ({
    toggleCompleted: id => dispatch(toggleCompleted(id)),
    deleteItem: id => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainList);


