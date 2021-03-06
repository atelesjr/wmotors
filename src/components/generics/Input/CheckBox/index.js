import React from 'react'
import * as S from './styles'

const InputCheckBox = ({ label, onChange, checked }) => {

    return (
        <S.CheckBox>
            <input 
                type="checkbox" id={label} 
                name={label} value={label} 
                checked={checked} 
                onChange={ (e) => onChange(e.target.checked) }
            />
            <label htmlFor={label} >
                <span />
                { label }
            </label>
        </S.CheckBox>
    )
}

export default InputCheckBox