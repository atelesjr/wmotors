import React from 'react'
import * as S from './styles'

import InputCheckBox from 'components/generics/Input/CheckBox'
import InputText from 'components/generics/Input/Text'

const SearchBar = () => {

    return (
        <S.SearchBar>
            <div className="first">
                <InputCheckBox label='Novos' />
                <InputCheckBox label='Usados' />
            </div>
            <div className="second">
                <div className="col1">
                    <div className="location">
                        <div  className="city">
                            <InputText
                                name="Onde"
                                placeholder="Digite a cidade"
                            />
                        </div>
                        <div  className="radius">
                            <input 
                                type={ 'text' } 
                                placeholder={ "200km" } 
                                name="raio"

                            />
                            Raio:
                        </div>

                    </div>
                   

                </div>
                <div className="col2">
                    Col 2
                </div>
            </div>
        </S.SearchBar>
    )
}

export default SearchBar