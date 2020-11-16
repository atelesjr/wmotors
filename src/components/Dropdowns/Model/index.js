import React, { useEffect } from 'react'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { getModels } from '../../../redux/actions/modelsActions'
//component
import InputDropdown from '../../generics/Input/Dropdown'


const ModelInput = ({ defaultValue, onChange, ...rest }) => {

    //Redux
    const dispatch = useDispatch();
    const { models } = useSelector( state => state )
    const list = models.models || []

    useEffect(() => {
        rest.brand !=='Todas' && dispatch(getModels(rest.brand))
    }, [rest.brand,dispatch])
    
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