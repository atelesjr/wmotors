import React from 'react'

import InputDropdown from 'components/generics/Input/Dropdown'

const ModelInput = ({defaultValue, onChange, ...rest }) => {
    
    const model = [
        {  option: '207' },
        {  option: '208' },
        {  option: '308' },
        {  option: '309' },
        {  option: '3000' },
    ]

    return (
        <InputDropdown
            label={'Modelo: '}
            options={ model }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default ModelInput