import ( INCREMENT, DECREMENT) from './actions';

const initialState ={
    count:0
}

export function reducer(state = initialState, action){
    switch(action,type) {
        case INCREMENT:
            return{
                count: state.count + 1
            };
        case DECREMENTE:
            return{
                count: state.count - 1
            };
        default:
            return state;
    }
}