import { types } from '../actions/actionTypes';
import ListItemViewModel from '../models/listItemViewModel.js';

const initialState = {
    error: null,
    listItems: [],
    loading: false,
    selectedItem: null
}

function handleFetchListItems(state, action) {

    //If there was an error
    if (action.result === "error") {
        return Object.assign({}, state, { loading: action.loading, error: action.errorMessage, listItems: [] });

    //If there was a result
    } else if (action.result) {
        const newList = action.result.map((item, index) => {
            const itemImageSrc = "http://placehold.it/150&text=Item$" + index;
            const newListItem = new ListItemViewModel(item, itemImageSrc);
            return Object.assign({}, newListItem);
        });
        return Object.assign({}, state, { loading: action.loading, error: action.errorMessage, listItems: newList });

    //Otherwise return existing state
    } else {
        return Object.assign({}, state, { loading: action.loading, error: action.errorMessage, listItems: [] });
    }
}


function handleSelectListItem(state, action) {

    let selectedItem;

    const list = state.listItems.map((item) => {
        if (item.id === action.selectedId) {
            selectedItem = item;
        }
    });

    return Object.assign({}, state, { selectedItem: selectedItem });
}


function handleDeselectListItem(state, action) {

    return Object.assign({}, state, { selectedItem: null });
}

export default function listReducer(state = initialState, action) {

    switch(action.type) {
        case types.ACT_FETCH_LIST_ITEMS: return handleFetchListItems(state, action);
        case types.ACT_SELECT_LIST_ITEM: return handleSelectListItem(state, action);
        case types.ACT_DESELECT_LIST_ITEM: return handleDeselectListItem(state, action);
        default: return state;
    }
}