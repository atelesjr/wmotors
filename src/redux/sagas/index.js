import { all, takeLatest } from 'redux-saga/effects'

//saga
import { getBrands } from './brands'
import { getModels } from './models'
import { getVersions } from './versions'


export default function* rootSaga() {
    yield all([
        takeLatest('GET_BRANDS', getBrands),
        takeLatest('GET_MODELS', getModels),
        takeLatest('GET_VERSIONS', getVersions),
    ]);
};