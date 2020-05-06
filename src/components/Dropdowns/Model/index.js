import React, { useEffect } from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getModels } from 'redux/actions/modelsActions'

import InputDropdown from 'components/generics/Input/Dropdown'

const ModelInput = ({ defaultValue, onChange, ...rest }) => {

    //Redux
    const dispatch = useDispatch();
    const { models } = useSelector( state => state )
    const list = models.models || []

    useEffect(() => {
        //console.log(rest.brand)
        rest.brand !=='Todas' && dispatch(getModels(rest.brand))
    }, [rest.brand,dispatch])
    
    //console.log('Models ', list)
    const options =  list.map( option => ( { id: option.ID, name: option.Name } ))
    
    return (
        <InputDropdown
            label={'Modelo: '}
            options={ options }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default ModelInput