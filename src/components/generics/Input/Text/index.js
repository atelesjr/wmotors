import React from 'react'
import * as S from './styles'

const InputText = ({ name, defaultValue, onChange, clearValue }) => {

    const handleChange = (txt) =>{
        const text = txt.target.value 
        onChange(text);
    }

    return (
        <S.Text>
            <input 
                type="text"
                name={ name }
                value={ defaultValue }
                onChange={ (txt) => handleChange(txt) }
            />
            {
                name === "Onde" && <i className="fas fa-map-marker-alt gps"/>
            }
            {
                (name === "Onde" && defaultValue !== '') && 
                <i className="fas fa-times-circle close" 
                    onClick={ () => clearValue('') }
                />
            }
            <span>{ name }:</span>
        </S.Text>
    )
}

export default InputText