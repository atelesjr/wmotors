const INITIAL_STATE = {
    models: null,
    loading: false,
    error: false,
    //errorCode: 0,
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_MODELS':
            //console.log('action', action)
            return {
                ...state,
                loading: true,
                error: false,
                models: null,
            }
        case 'GET_MODELS_SUCCESS':
            console.log('action', action)
            return {
                ...state,
                loading: false,
                error: false,
                models: action.payload
            }
        case 'GET_MODELS_ERROR':
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