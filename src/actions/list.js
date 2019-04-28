import axios from 'axios';
import types from './actionTypes';

//Fetch items
export function fetchListItems() {

    return function (dispatch) {

        dispatch(actionResult(null, null, true));

        const config = {
            "x-api-key": "af891540-5a6f-4634-9d8c-9a4416171c8b"
        }

        axios.get("https://api.thecatapi.com/v1/breeds", {headers: config})
            .then((response) => {
                dispatch(actionResult(response.data, null, false));
            })
            .catch((error) => {
                console.log("error", error);
                const errorMessage = "There was a problem trying to fetch cats!";
                dispatch(actionResult("error", errorMessage, false));
            });

    }
}

function actionResult(result, errorMessage, loading) {
    return {
        type: types.ACT_FETCH_LIST_ITEMS,
        result,
        errorMessage,
        loading
    }  
}

//Select an item
export function selectListItem(selectedId) {
    return {
        type: types.ACT_SELECT_LIST_ITEM,
        selectedId
    }
}

//Deselect an item
export function deselectListItem() {
    return {
        type: types.ACT_DESELECT_LIST_ITEM,
    }
}