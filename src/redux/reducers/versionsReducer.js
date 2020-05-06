const INITIAL_STATE = {
    version: null,
    loading: false,
    error: false,
    //errorCode: 0,
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_VERSIONS':
            //console.log('action', action)
            return {
                ...state,
                loading: true,
                error: false,
                version: null,
            }
        case 'GET_VERSIONS_SUCCESS':
            console.log('action', action)
            return {
                ...state,
                loading: false,
                error: false,
                versions: action.payload
            }
        case 'GET_VERSIONS_ERROR':
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