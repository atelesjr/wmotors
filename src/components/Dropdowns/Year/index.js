import React from 'react'

import InputDropdown from 'components/generics/Input/Dropdown'

const YearInput = ({defaultValue, onChange }) => {
    
    const year = [
        {  option: '2015' },
        {  option: '2016' },
        {  option: '2017' },
        {  option: '2018' },
        {  option: '2019' },
        {  option: '2020' },
    ]

    return (
        <InputDropdown
            label={'Ano Desejado: '}
            options={ year }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
        />                            
    )
}

export default YearInput