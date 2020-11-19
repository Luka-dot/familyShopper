import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import ListItem from '../list-item/list-item.component';
import CustomButton from '../button/custom-button-component';
import {deleteItem, toggleCompleted} from '../../redux/actions/index';

import './main-list.styles.scss';

const MainList = (props) => {
    console.log(props.mainList)
    
    const displayListId = props.location.selectedItemId;
    console.log(displayListId)
    const elementsIndex = props.mainList.findIndex(element => element.id === displayListId )
    console.log(elementsIndex)

    // const findListToDisplay = (id) => {
    //     elementsIndex = props.mainList.findIndex(element => element.id === id )
    //     console.log(elementsIndex);
        
    //     return elementsIndex
    // }

    const handleToggle = (id) => {
        props.toggleCompleted(id);
    };

    const handleDelete = (id) => {
        props.deleteItem(id);
    };

    // useEffect(() => {
    //     findListToDisplay(displayListId)
    // })
    

    return (  
        <div className="list-main-wrapper">    
            <div className="list-main-list">
                {
                    props.mainList[elementsIndex].listDetail.map((props) => (
                        <ListItem 
                            key={props.id} 
                            {...props} 
                            toggleCompleted={() => handleToggle(props.id)} 
                            deleteItem={() => handleDelete(props.id)}  
                        />
                    ))
                }
            </div>
            <div className="positionInBottom" >
                <CustomButton  />
        </div>
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


