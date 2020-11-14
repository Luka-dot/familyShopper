import React from 'react';

import List from './list-component';
import './list-container.styles.scss';

const ListContainer = ({listData, handleToggle}) => {

    return (
        <div className="list-container">
            {
                listData.map(({ id, ...otherProps }) => (<List 
                    id={id} 
                    handleToggle={handleToggle}
                    {...otherProps} 
                />))
            }
        </div>

    )
};

export default ListContainer;