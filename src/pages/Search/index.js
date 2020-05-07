import React from 'react'
import * as S from './styles'

import SearchBar from 'components/SearchBar'
import SearchResult from 'components/SearchResult'

const Search = ({page}) => {

    return (
        <S.SearchPage>
            <SearchBar page={page} />
            <SearchResult />
        </S.SearchPage>
    )
}

export default Search