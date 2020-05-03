import React from 'react'
import * as S from './styles'

const InputCheckBox = ({ label }) => {

    return (
        <S.CheckBox>
            <input type="checkbox" id={label} name={label} value={label} />
            <label htmlFor={label} >
                <span />
                { label }
            </label>
        </S.CheckBox>
    )
}

export default InputCheckBox