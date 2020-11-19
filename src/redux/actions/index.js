
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

export const addItem = (newItem) => {
    return {
        type: 'ADD_ITEM',
        payload: newItem
    }
};

export const toggleCompleted = (id, elIndex) => {
    console.log(id, elIndex)
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