import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import ListItem from '../list-item/list-item.component';

import './main-list.styles.scss';

const MainList = ({ mainList }) => {

    return (
        <div className="main-list">
            {
                mainList.map((props) => (
                    <ListItem key={props.id} {...props} />
                ))
            }
        </div>
    )
};

const mapStateToProps = state => ({
    mainList: state.mainList
});

export default connect(mapStateToProps)(MainList);


