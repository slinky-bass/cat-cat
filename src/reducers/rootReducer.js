import listReducer from './listReducer';

function RootReducer(state= {}, action) {
    return {
        list: listReducer(state.list, action)
    }
}

export default RootReducer;