const initialState = [{
    id: 1,
    text: "this is a first list item",
    completed: false
},
{
    id: 2,
    text: "this is yet another list",
    completed: false
},
{
    id: 3,
    text: "more and more and more this is last one",
    completed: false
}
]

const mainListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_LIST":
            return state;
        case "DELETE_ITEM":
            let newList = state.filter((item) => { return item.id !== action.payload});
            console.log(newList)
            return [
                ...state.filter((item) => { return item.id !== action.payload})
            ];
        case "ADD_ITEM":
            let newItem = { id: (Math.random()), text: action.payload, completed: false}
            console.log('add item')
            return [
                ...state,
                newItem
            ];
        case "TOGGLE_COMPLETED":   
            const elementsIndex = state.findIndex(element => element.id === action.payload )
            console.log('element index ', elementsIndex)
            if (elementsIndex < 0) {
                return [
                    ...state
                ]
            } else {
            let newArray = [...state];
            newArray[elementsIndex] = {...newArray[elementsIndex], completed: !newArray[elementsIndex].completed}
            console.log(newArray)
            return [
                ...newArray
            ]
            }
        default:
            return [ ...state ]
    }
};

export default mainListReducer;
