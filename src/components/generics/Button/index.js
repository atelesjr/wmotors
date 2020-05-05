import React from 'react'
import * as S from './styles'

const Button = ({label, onClick}) => {
    return (
        <S.Button onClick={ () => onClick()}>
            {label}
        </S.Button>
    )
}

export default Button