import React from 'react'
//componnent
import InputDropdown from '../../generics/Input/Dropdown'

const YearInput = ({ defaultValue, onChange, ...rest }) => {
    
    const year = [
        {  id: 1, name: '2015' },
        {  id: 2, name: '2016' },
        {  id: 3, name: '2017' },
        {  id: 4, name: '2018' },
        {  id: 5, name: '2019' },
        {  id: 6, name: '2020' },
    ]

    return (
        <InputDropdown
            placeholder={'Ano Desejado: '}
            options={ year }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default YearInput