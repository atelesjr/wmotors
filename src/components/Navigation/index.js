import React, { useState } from 'react'
import * as S from './styles'

import ButtonSecundary from '../generics/Button/Secundary'
import Tabs from '../generics/Tabs'

const Navigation = ({ page, setPage }) => {
    const [selected, setSelected] = useState('CARROS');

    const options = [
        { name: 'CARROS', logo: <i className="fas fa-car" /> , page: 'car' },
        { name: 'MOTOS', logo: <i className="fas fa-motorcycle" />, page: 'moto' }
    ]

    return (
        <S.Navigation>
            <Tabs  
                options={ options } selected={ selected } setSelected={ setSelected }
                page={ page } setPage={ setPage } />
            <ButtonSecundary label={`Vender  ${
                page === 'car' ? 'meu carro' : 'minha moto'
            }`} />
        </S.Navigation>
    )
}

export default Navigation
