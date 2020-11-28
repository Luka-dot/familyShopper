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

export const addItem = (newItem, parentId) => async dispatch => {
    console.log('add item action ', newItem, parentId)
    const toBeAdded = {
        "listDetail": [{
            "id": Math.random(),
            "text": newItem,
            "completed": "False"
        }]
    }
    const request = await axios.patch(`http://localhost:5000/api/directory/${parentId}`, toBeAdded)
    dispatch({ type: 'ADD_ITEM', payload: request.data })


    // axios.patch(`http://localhost:5000/api/directory/${parentId}`, newItem).then(function (response) {
    //     dispatch({ type: 'ADD_ITEM', payload: response.data })
    // }).catch(function (error) {
    //     console.log(error)
    // });
};

// export const addItem = (newItem, parentId) => {
//     console.log('add ', newItem, parentId)
//     return {
//         type: 'ADD_ITEM',
//         payload: {newItem, parentId}
//     }
// };

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
