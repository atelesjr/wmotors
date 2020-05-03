import React from 'react'
import * as S from './styles'

import Logo from 'assets/wm-logo.png'

const Header = () => {
    return (
        <S.Header>
            <img src={Logo} alt="WebMotors Logo" />
        </S.Header>
    )
}

export default Header


