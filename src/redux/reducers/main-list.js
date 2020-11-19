import inialData from '../../data/base-date';

const initialState = inialData;

const mainListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_LIST":
            return state;

        case "DELETE_ITEM":
            const pIndex = action.payload.elIndex;
            const xList = state[pIndex].listDetail.filter((item) => { return item.id !== action.payload.id});
      //      console.log(state[pIndex].listDetail)
        //    console.log('xlist ', xList)
            let deleteList = [ ...state ];
            const ttt = (deleteList[pIndex].listDetail = xList)
                
            return [
                ...state  
            ];

        case "ADD_ITEM":
            let newItem = { id: (Math.random()), text: action.payload, completed: false}
            console.log('add item')
            return [
                ...state,
                newItem
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
            console.log('single list fired')
            return [
                ...state
            ];
    }
};

export default mainListReducer;
