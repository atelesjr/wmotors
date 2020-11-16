import { put, call } from 'redux-saga/effects'

import { brands } from '../api'

export function* getBrands({ payload }) {
    console.log('saga brands', payload)

    try {
        const data = yield call(brands, payload)
        console.log('data -> brands', data)
        if(data.error){
            yield put({ type: 'GET_BRANDS_ERROR', payload: data })
        } else {
            yield put({ type: 'GET_BRANDS_SUCCESS', payload: data })
        }
    } catch (error) {
        console.log('error', error)
        yield put({ type: 'GET_BRANDS_ERROR', payload: error })
    }
}