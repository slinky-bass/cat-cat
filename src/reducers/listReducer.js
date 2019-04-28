import { types } from '../actions/actionTypes';
import ListItemViewModel from '../models/listItemViewModel.js';

const initialState = {
    error: null,
    listItems: [],
    loading: false,
    selectedId: null
}

function handleFetchListItems(state, action) {

    //If there was an error
    if (action.result === "error") {
        return Object.assign({}, state, { loading: action.loading, error: action.errorMessage, listItems: [] });

    //If there was a result
    } else if (action.result) {
        const newList = action.result.map((item) => {
            const newListItem = new ListItemViewModel(item);
            return Object.assign({}, newListItem);
        });
        return Object.assign({}, state, { loading: action.loading, error: action.errorMessage, listItems: newList });

    //Otherwise return existing state
    } else {
        return Object.assign({}, state, { loading: action.loading, error: action.errorMessage, listItems: [] });
    }
}

function handleSelectListItem(state, action) {
    console.log("selecting an item!");
}

export default function listReducer(state = initialState, action) {

    switch(action.type) {
        case types.ACT_FETCH_LIST_ITEMS: return handleFetchListItems(state, action);
        case types.ACT_SELECT_LIST_ITEM: return handleSelectListItem(state, action);
        default: return state;
    }
}