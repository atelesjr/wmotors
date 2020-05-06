import React from 'react'
import * as S from './styles'

import CarSearchBar from './Car'
import MotoSearchBar from './Moto'

const SearchBar = ({page}) => {

    const setBar = (page) => ({
        car: <CarSearchBar  />,
        moto: <MotoSearchBar />
    })[page]

    return (
        <S.SearchBar>
            { setBar(page) }
        </S.SearchBar>
    )
}

export default SearchBar