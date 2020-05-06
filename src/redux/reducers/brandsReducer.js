const INITIAL_STATE = {
    brands: null,
    loading: false,
    error: false,
    //errorCode: 0,
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_BRANDS':
            //console.log('action', action)
            return {
                ...state,
                loading: true,
                error: false,
                brands: null,
            }
        case 'GET_BRANDS_SUCCESS':
            console.log('action', action)
            return {
                ...state,
                loading: false,
                error: false,
                brands: action.payload
            }
        case 'GET_BRANDS_ERROR':
            //console.log('action', action)
            return {
                ...state,
                loading: false,
                error: true,
                //errorCode: action.payload.error.errorCode,
                
            }
        default:
            return state
    }
}

export default reducers