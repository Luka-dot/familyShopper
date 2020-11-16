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
            console.log('new list ', newList)
            return [
                ...newList
            ];
        case "ADD_ITEM":
            let newItem = { id: (Math.random()), text: action.payload, completed: false}
            return [
                ...state,
                newItem
            ];
        case "TOGGLE_COMPLETED":
            let toggleList = [...state]
            const itemToUpdate = toggleList.find( item => {
                return item.id === action.payload
            })
            itemToUpdate.completed = !itemToUpdate.completed
            return [
                ...toggleList
            ]
        default:
            return state
    }
};

export default mainListReducer;
