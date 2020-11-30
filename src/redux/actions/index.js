import axios from "axios";

export const getMainList = () => async dispatch => {
    console.log('fired action/index getMainList')
    const request = await axios.get('http://localhost:5000/api/directory');
    console.log('request ',request.data.directory)
    dispatch({ type: 'GET_LIST', payload: request.data.directory})
  };

export const deleteItem = (id, elIndex) => {
    return {
        type: 'DELETE_ITEM',
        payload: {id, elIndex}
    }
};

export const addItem = (newItem, parentId, elementsIndex) => async dispatch => {
    const toBeAdded = {
            "id": Math.random(),
            "text": newItem,
            "completed": "False",
            "elementsIndex": elementsIndex
    }

    const request = await axios.patch(`http://localhost:5000/api/directory/${parentId}`, toBeAdded)
    dispatch({ type: 'ADD_ITEM', payload: request.data })

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
    console.log('fired action/index DELETE ', directoryListId)
    const request = axios.delete(`http://localhost:5000/api/directory/${directoryListId}`);
    console.log('request for DELET ',request.data)
    return ({ type: 'DELTE_DIRECTORY_LIST', payload: directoryListId})
};
