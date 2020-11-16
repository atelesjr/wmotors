import React from 'react'
//componnet
import InputDropdown from '../../generics/Input/Dropdown'

const DistanceInput = ({defaultValue, onChange, ...rest }) => {
    
    const options = [
        {  id: 1, name: '0km' },
        {  id: 2, name: '50km' },
        {  id: 3, name: '100km' },
        {  id: 4, name: '150km' },
        {  id: 5, name: '200km' },
    ]

    return (
        <InputDropdown
            label={'Raio: '}
            options={ options }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default DistanceInput