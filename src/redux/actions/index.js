import axios from "axios";



export const getMainList = () => async dispatch => {
    console.log('fired action/index getMainList')
    const request = await axios.get('http://localhost:5000/api/directory');
    console.log('request ',request.data.directory)
    dispatch({ type: 'GET_LIST', payload: request.data.directory})
  };



// export const getMainList () => async dispatch {
//     const request = axios.get('http://localhost:5000/api/directory');
    

//     return {
//         type: 'GET_LIST',
//         payload: request
//     }
// };

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

export const deleteDirectoryList = (directoryListId) => {
    return{
        type: 'DELTE_DIRECTORY_LIST',
        payload: directoryListId
    }
};