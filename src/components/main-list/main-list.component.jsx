import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import ListItem from '../list-item/list-item.component';
import CustomButton from '../button/custom-button-component';
import {deleteItem, toggleCompleted} from '../../redux/actions/index';

import './main-list.styles.scss';

const MainList = (props) => {
    console.log(props)

    const displayListId = props.location.selectedItemId;
    const elementsIndex = props.mainList.findIndex(element => element.id === displayListId )

    const handleToggle = (id, elIndex) => {
        console.log('mainList ', elementsIndex)
        console.log(id)
        props.toggleCompleted(id, elIndex);
    };

    const handleDelete = (id) => {
        props.deleteItem(id);
    };

    return (  
        <div className="list-main-wrapper">    
            <div className="list-main-list">
                {
                    props.mainList[elementsIndex].listDetail.map((props) => (
                        <ListItem 
                            key={props.id} 
                            {...props}
                            elementsIndex={elementsIndex} 
                            toggleCompleted={handleToggle} 
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
    toggleCompleted: (id, elIndex) => dispatch(toggleCompleted(id, elIndex)),
    deleteItem: id => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainList);


