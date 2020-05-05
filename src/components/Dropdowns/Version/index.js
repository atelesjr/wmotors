import React from 'react'

import InputDropdown from 'components/generics/Input/Dropdown'

const VersionInput = ({defaultValue, onChange, ...rest }) => {
    
    const version = [
        {  option: '1.2 Active 12V FLEX 4P MANUAL' },
        {  option: '1.5 Active 8V FLEX 4P MANUAL' },
        {  option: '1.6 Active PACK 16V FLEX 4P MANUAL' },
        {  option: '1.6 Active PACK 16V FLEX 4P AUTO' },
        {  option: '1.6 GRIFFE 16V FLEX 4P AUTO' },
    ]

    return (
        <InputDropdown
            label={'Versão: '}
            options={ version }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default VersionInput