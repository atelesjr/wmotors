  import axios from 'axios'

  const API_URL='http://desafioonline.webmotors.com.br/api/OnlineChallenge'

/**
 * brands
 */
export const brands = async (payload) => {
    let response = await axios.get(`${API_URL}/Make`).then(res => {
        return res.data
    }).catch(error => {
        return error
    })

    return response
}

/**
 * model
 * @param {string} ID of brands
 */
export const models = async (payload) => {
    let response = await axios.get(`${API_URL}/Model?MakeID=${ payload }`).then(res => {
        return res.data
    }).catch(error => {
        return error
    })

    return response
}


/**
 * versions
 * @param {string} ID of models
 */
export const versions = async (payload) => {
    let response = await axios.get(`${API_URL}/Version?ModelID=${ payload }`).then(res => {
        return res.data
    }).catch(error => {
        return error
    })

    return response
}