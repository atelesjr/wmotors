import React from 'react'

import InputDropdown from 'components/generics/Input/Dropdown'

const PriceInput = ({defaultValue, onChange, ...rest }) => {
    
    const options = [
        {  id: 1 , name: '$10.000,00 a 20.000,00' },
        {  id: 2, name: '$21.000,00 a 30.000,00' },
        {  id: 3, name: '$31.000,00 a 40.000,00' },
        {  id: 4, name: '$41.000,00 a 50.000,00' },
        {  id: 5, name: 'acima $51.000,00' },
    ]

    return (
        <InputDropdown
            label={''}
            placeholder={'Faixa de Preço'}
            options={ options }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default PriceInput