import { put, call } from 'redux-saga/effects'

import { models } from 'redux/api'

export function* getModels({ payload }) {
    console.log('saga Models', payload)

    try {
        const data = yield call(models, payload)
        console.log('data -> models', data)
        if(data.error){
            yield put({ type: 'GET_MODELS_ERROR', payload: data })
        } else {
            yield put({ type: 'GET_MODELS_SUCCESS', payload: data })
        }
    } catch (error) {
        console.log('error', error)
        yield put({ type: 'GET_MODELS_ERROR', payload: error })
    }
}