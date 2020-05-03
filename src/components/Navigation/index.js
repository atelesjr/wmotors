import React from 'react'
import * as S from './styles'

import Button from 'components/generics/Button'
import Tabs from 'components/generics/Tabs'

const Navigation = ({ page, setPage }) => {
    const transports = [
        { name: 'CARROS', logo: <i className="fas fa-car" /> , page: 'car', selected: true },
        { name: 'MOTOS', logo: <i className="fas fa-motorcycle" />, page: 'moto', selected: false }
    ]

    return (
        <S.Navigation>
            <Tabs  options={ transports } page={ page } setPage={ setPage } />
            <Button label='Vender meu carro' />
        </S.Navigation>
    )
}

export default Navigation
