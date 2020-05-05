import React from 'react'

import InputDropdown from 'components/generics/Input/Dropdown'

const DistanceInput = ({defaultValue, onChange, ...rest }) => {
    
    const distance = [
        {  option: '0km' },
        {  option: '50km' },
        {  option: '100km' },
        {  option: '150km' },
        {  option: '200km' },
    ]

    return (
        <InputDropdown
            label={'Raio: '}
            options={ distance }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default DistanceInput