export default function reducer(state = {
    location: "/",
    width: 1920,
    height: 1080,

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
