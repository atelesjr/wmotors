import React, { useState } from 'react'
import * as S from './styles'

import ButtonSecundary from 'components/generics/Button/Secundary'
import Tabs from 'components/generics/Tabs'

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
            <ButtonSecundary label='Vender meu carro' />
        </S.Navigation>
    )
}

export default Navigation
