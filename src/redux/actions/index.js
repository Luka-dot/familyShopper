export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num,
    }
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};

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