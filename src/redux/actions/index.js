
export const getMainList = () => {
    return {
        type: 'GET_LIST'
    }
};

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
};

export const addItem = (newItem) => {
    return {
        type: 'ADD_ITEM',
        payload: newItem
    }
};

export const toggleCompleted = (id) => {
    return {
        type: 'TOGGLE_COMPLETED',
        payload: id
    }
};

export const logIn = () => {
    return {
        type: 'LOG_IN',
    }
};