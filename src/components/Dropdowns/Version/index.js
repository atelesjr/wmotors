import React, { useEffect } from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getVersions } from 'redux/actions/versionsActions'

import InputDropdown from 'components/generics/Input/Dropdown'

const VersionInput = ({defaultValue, onChange, ...rest }) => {
    //Redux
    const dispatch = useDispatch();
    const { versions } = useSelector( state => state )
    const list = versions.versions || []

    useEffect(() => {
        console.log(rest.model)
        rest.model !=='Todos' && dispatch(getVersions(rest.model))
    }, [rest.model, dispatch])
    
    const options =  list.map( option => ( { id: option.ID, name: option.Name } ))

    return (
        <InputDropdown
            label={'Versão: '}
            options={ options }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default VersionInput