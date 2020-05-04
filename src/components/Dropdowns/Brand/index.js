import React from 'react'

import InputDropdown from 'components/generics/Input/Dropdown'

const BrandInput = ({ defaultValue, onChange }) => {
    
    const brands = [
        {  option: 'Chevrolet' },
        {  option: 'Ford' },
        {  option: 'VolksWagen' },
        {  option: 'Peugeot' },
        {  option: 'Honda' },
    ]

    return (
        <InputDropdown
            label={'Marca: '}
            options={ brands }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
        />                            
    )
}

export default BrandInput