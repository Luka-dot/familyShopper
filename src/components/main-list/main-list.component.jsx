import React, {useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import ListItem from '../list-item/list-item.component';
import CustomButton from '../button/custom-button-component';
import {addItem, deleteItem, toggleCompleted} from '../../redux/actions/index';

import './main-list.styles.scss';

const MainList = (props) => {
    const elementId = props.match.params.id
    const elementsIndex = props.mainList.findIndex(element => element._id === elementId )
    
    console.log('element index ', props.match.params.id, elementsIndex);
    console.log(props.mainList[elementsIndex].listDetail)

    const dispatch = useDispatch();
    const [entry, setEntry] = useState('');

    const hadleChange = (e) => {
        const textInput = e.target.value;
        setEntry(textInput)
    }

    const handleEnter = () => {
        console.log('submitting'. elementId, elementsIndex)
        if (entry.length > 0) {
            props.addItem(entry, elementId, elementsIndex);
        setEntry('')
        } else {
            alert('must not be empty')
        }
    }

    const handleKeyEnter = (e) => {
        e.preventDefault()
        if (entry.length > 0) {
            props.addItem(entry, elementId, elementsIndex);
        setEntry('')
        } else {
            alert('must not be empty')
        }
    }


    const handleToggle = (id, elIndex) => {
        console.log("inside handleToggle ", id, elementsIndex)
        props.toggleCompleted(id, elIndex);
    };

    const handleDelete = (id, elIndex, directoryId) => {
        props.deleteItem(id, elIndex, directoryId);
    };

    return (  
        <div className="list-main-wrapper">    
            <div className="list-main-list">
                <h2>mainlist</h2>
                {
                    props.mainList[elementsIndex].listDetail.map((props) => (
                        <ListItem 
                            key={props.id} 
                            {...props}
                            elementsIndex={elementsIndex} 
                            toggleCompleted={handleToggle} 
                            deleteItem={handleDelete} 
                            directoryId={elementId} 
                        />
                    ))
                }
                
            </div>
            <div className="button-container">
            <form onSubmit={(e) => handleKeyEnter(e)}>
                <input className="input-text" placeholder="new item" value={entry} onChange={(e) => hadleChange(e)} />
            </form>
            <button 
                className="custom-button"
                type="submit"
                onClick={() => handleEnter(entry)}
            >+</button>
        </div>
      </div>
    )
};

const mapStateToProps = state => ({
    mainList: state.mainList
});

const mapDispatchToProps = dispatch => ({
    toggleCompleted: (id, elIndex) => dispatch(toggleCompleted(id, elIndex)),
    deleteItem: (id, elIndex, directoryId) => dispatch(deleteItem(id, elIndex, directoryId)),
    addItem: (newItem, parentId, elementsIndex) => dispatch(addItem(newItem, parentId, elementsIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainList);