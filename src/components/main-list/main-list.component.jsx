import React, {useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import ListItem from '../list-item/list-item.component';
import CustomButton from '../button/custom-button-component';
import {addItem, deleteItem, toggleCompleted} from '../../redux/actions/index';

import './main-list.styles.scss';

const MainList = (props) => {
    const displayListId = props.location.selectedItemId;
    const elementsIndex = props.mainList.findIndex(element => element.id === displayListId )
    const elementId = props.match.params.id
    console.log('element index ', props.match.params.id)

    const dispatch = useDispatch();
    const [entry, setEntry] = useState('');
    const parentId = props.elementId;

    const hadleChange = (e) => {
        const textInput = e.target.value;
        setEntry(textInput)
    }

    const handleEnter = () => {
        console.log('submitting'. elementId)
        if (entry.length > 0) {
            dispatch(addItem(entry, elementId));
        setEntry('')
        } else {
            alert('must not be empty')
        }
    }

    const handleKeyEnter = (e) => {
        e.preventDefault()
        if (entry.length > 0) {
            dispatch(addItem(entry, elementId));
        setEntry('')
        } else {
            alert('must not be empty')
        }
    }


    const handleToggle = (id, elIndex) => {
        console.log("inside handleToggle ", id, elementsIndex)
        props.toggleCompleted(id, elIndex);
    };

    const handleDelete = (id, elIndex) => {
        props.deleteItem(id, elIndex);
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
                            directoryId={props._id} 
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
    deleteItem: (id, elIndex) => dispatch(deleteItem(id, elIndex)),
    addItem: (newItem, parentId) => dispatch(addItem(newItem, parentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainList);











// import React, {useEffect} from 'react';
// import { connect } from 'react-redux';

// import ListItem from '../list-item/list-item.component';
// import CustomButton from '../button/custom-button-component';
// import {deleteItem, toggleCompleted} from '../../redux/actions/index';

// import './main-list.styles.scss';

// const MainList = (props) => {
//     const displayListId = props.location.selectedItemId;
//     const elementsIndex = props.mainList.findIndex(element => element.id === displayListId )
//     const elementId = props.mainList.map(el => el._id)
//     console.log('element index ', elementId)

//     const handleToggle = (id, elIndex) => {
//         console.log("inside handleToggle ", id, elementsIndex)
//         props.toggleCompleted(id, elIndex);
//     };

//     const handleDelete = (id, elIndex) => {
//         props.deleteItem(id, elIndex);
//     };

//     return (  
//         <div className="list-main-wrapper">    
//             <div className="list-main-list">
//                 <h2>mainlist</h2>
//                 {
//                     props.mainList[elementsIndex].listDetail.map((props) => (
//                         <ListItem 
//                             key={props.id} 
//                             {...props}
//                             elementsIndex={elementsIndex} 
//                             toggleCompleted={handleToggle} 
//                             deleteItem={handleDelete} 
//                             directoryId={props._id} 
//                         />
//                     ))
//                 }
                
//             </div>
//             <div className="positionInBottom" >
//                 <CustomButton elementsIndex={elementsIndex} />
//             </div>
//       </div>
//     )
// };

// const mapStateToProps = state => ({
//     mainList: state.mainList
// });

// const mapDispatchToProps = dispatch => ({
//     toggleCompleted: (id, elIndex) => dispatch(toggleCompleted(id, elIndex)),
//     deleteItem: (id, elIndex) => dispatch(deleteItem(id, elIndex))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(MainList);