export const getBrands = (payload) => ({ type: 'GET_BRANDS' })
export const getBrandsSuccess = (payload) => ({ type: 'GET_BRANDS_SUCCESS', payload })
export const getBrandsError = (payload) => ({ type: 'GET_BRANDS_ERROR', payload })