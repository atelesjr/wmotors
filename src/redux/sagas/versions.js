import { put, call } from 'redux-saga/effects'

import { versions } from '../api'

export function* getVersions({ payload }) {
    console.log('saga Models', payload)

    try {
        const data = yield call(versions, payload)
        console.log('data -> versions', data)
        if(data.error){
            yield put({ type: 'GET_VERSIONS_ERROR', payload: data })
        } else {
            yield put({ type: 'GET_VERSIONS_SUCCESS', payload: data })
        }
    } catch (error) {
        console.log('error', error)
        yield put({ type: 'GET_VERSIONS_ERROR', payload: error })
    }
}