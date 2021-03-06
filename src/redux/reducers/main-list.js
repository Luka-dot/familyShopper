import _ from "lodash";

const mainListReducer = (state = [], action) => {
    console.log(action.payload)
    
    switch(action.type) {
        case "GET_LIST":         
            return action.payload;

        case "DELETE_ITEM":
            console.log(action.payload)
        
            return [
                action.payload 
            ];

        case "ADD_ITEM":
            let newItem = { id: (Math.random()), text: action.payload.newItem, completed: false}
       
            const addItem = [...state];
            addItem[0].listDetail.push(newItem);
       
            return [
                ...addItem
            ];

        case "TOGGLE_COMPLETED":   
            const parentIndex = action.payload.elIndex;
            const elementsIndex = state[parentIndex].listDetail.findIndex(element => element.id === action.payload.id )

            if (elementsIndex < 0) {
                return [
                    ...state
                ]
            } else {
            let newArray = [...state];
            newArray[parentIndex].listDetail[elementsIndex] = {
                ...newArray[parentIndex].listDetail[elementsIndex], 
                completed: !newArray[parentIndex].listDetail[elementsIndex].completed
            }
            return [
                ...newArray
            ]
            }
        default:
            return [ ...state ];

        case "SINGLE_LIST":
            return [
                ...state
            ];

        case "ADD_NEW_DIRECTORY_LIST":
            const textToAdd = action.payload;
            const dateToAdd = new Date().toLocaleDateString();
            const newDirectoryToAdd = { id: Math.random(), name: textToAdd, created: dateToAdd, listDetail: [] };
            return [
                ...state,
                newDirectoryToAdd
            ]

        case "DELTE_DIRECTORY_LIST":
            const listAfterDeleteDirectory = state.filter((item) => {return item.id !== action.payload})
            return [
                ...listAfterDeleteDirectory
            ]
    }
};

export default mainListReducer;
