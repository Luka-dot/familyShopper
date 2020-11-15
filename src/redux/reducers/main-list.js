const initialState = [{
    id: 1,
    text: "this is a first list item",
},
{
    id: 2,
    text: "this is yet another list"
},
{
    id: 3,
    text: "more and more and more this is last one"
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
            ]
        default:
            return state
    }
};

export default mainListReducer;