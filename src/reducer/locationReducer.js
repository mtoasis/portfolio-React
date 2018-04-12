export default function reducer(state = {
    location: "/",
    width: null,
    height: null,

}, action) {
    switch (action.type) {
        case "STORE_PATH": {
            return {
                ...state,
                location: action.payload
            }
        }
        case "STORE_WIDTH": {
            return {
                ...state,
                width: action.payload
            }
        }
        case "STORE_HEIGHT": {
            return {
                ...state,
                height: action.payload
            }
        }

        default: {
            return state
        }
    }

}