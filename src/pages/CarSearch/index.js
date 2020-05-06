import React from 'react'
import * as S from './styles'

import SearchBar from 'components/SearchBar'

const CarSearch = ({page}) => {

    return (
        <S.CarSearch>
            <SearchBar page={page} />
        </S.CarSearch>
    )
}

export default CarSearch