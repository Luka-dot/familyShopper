
export const getMainList = () => {
    return {
        type: 'GET_LIST'
    }
};

export const deleteItem = (id, elIndex) => {
    return {
        type: 'DELETE_ITEM',
        payload: {id, elIndex}
    }
};

export const addItem = (newItem, parentId) => {
    console.log('add ', newItem, parentId)
    return {
        type: 'ADD_ITEM',
        payload: {newItem, parentId}
    }
};

export const toggleCompleted = (id, elIndex) => {
    return {
        type: 'TOGGLE_COMPLETED',
        payload: {id, elIndex}
    }
};

export const logIn = () => {
    return {
        type: 'LOG_IN',
    }
};

export const singleListSelection = (id) => {
    return{
        type: 'SINGLE_LIST',
        payload: id
    }
};

export const addNewDirectoryList = (name) => {
    return{
        type: 'ADD_NEW_DIRECTORY_LIST',
        payload: name
    }
};