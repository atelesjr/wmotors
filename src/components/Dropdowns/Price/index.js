import React from 'react'

import InputDropdown from 'components/generics/Input/Dropdown'

const PriceInput = ({defaultValue, onChange, ...rest }) => {
    
    const price = [
        {  option: '$10.000,00 a 20.000,00' },
        {  option: '$21.000,00 a 30.000,00' },
        {  option: '$31.000,00 a 40.000,00' },
        {  option: '$41.000,00 a 50.000,00' },
        {  option: 'acima $51.000,00' },
    ]

    return (
        <InputDropdown
            label={''}
            placeholder={'Faixa de Preço'}
            options={ price }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default PriceInput