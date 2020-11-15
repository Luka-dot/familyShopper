import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListItem from '../list-item/list-item.component';

import './main-list.styles.css';

const MainList = () => {
    const mainListData = useSelector(state => {return state.mainList})

    console.log(mainListData)
    return (
        <div className="main-list">
            {
                mainListData.map((props) => (
                    <ListItem key={props.id} {...props} />
                ))
            }
        </div>
    )
};

export default MainList;


