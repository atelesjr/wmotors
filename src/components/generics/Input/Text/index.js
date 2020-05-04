import React from 'react'
import * as S from './styles'

const InputText = ({ name, placeholder }) => {

    return (
        <S.Text>
            <input 
                type="text"
                placeholder={ placeholder } 
                name={ name }
            />
            {
                name === "Onde" && <i className="fas fa-map-marker-alt gps"/>
            }
            {
                name === "Onde" && <i className="fas fa-times-circle close" />
            }
            <span>{ name }:</span>
        </S.Text>
    )
}

export default InputText