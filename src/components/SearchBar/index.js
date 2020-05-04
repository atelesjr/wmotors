import React, { useState, useEffect } from 'react'
import * as S from './styles'

import InputCheckBox from 'components/generics/Input/CheckBox'
import InputText from 'components/generics/Input/Text'
import InputDistance from 'components/Dropdowns/Distance'
import InputYear from 'components/Dropdowns/Year'
import InputPrice from 'components/Dropdowns/Price'
import InputBrand from 'components/Dropdowns/Brand'
import InputModel from 'components/Dropdowns/Model'
import InputVersion from 'components/Dropdowns/Version'


const SearchBar = () => {
    
    const [ distance, setDistance ] = useState('100km');
    const [ year, setYear ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ brand, setBrand ] = useState('Todas');
    const [ model, setModel ] = useState('Todos');
    const [ version, setVersion ] = useState('');

    useEffect(() => {
        console.log('Distance:', distance)
    }, [distance])

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
                                placeholder="São Paulo"
                            />
                        </div>
                        <div  className="radius">
                            <InputDistance
                                defaultValue={ distance }
                                onChange={ (distance) => setDistance(distance)}
                            />                            
                        </div>

                    </div>

                    <div className="yearPrice">
                        <div className="col1">
                            <InputYear
                               defaultValue={ year }
                               onChange={ (year) => setYear(year) }
                            />
                        </div>
                        <div className="col2">
                            <InputPrice
                               defaultValue={ price }
                               onChange={ (price) => setPrice(price) }
                            />
                        </div>
                    </div>

                </div>

                <div className="col2">
                    <div className="brandModel">

                        <div className="col1">
                            <InputBrand
                                defaultValue={ brand }
                                onChange={ (brand) => setBrand(brand) }
                            />
                        </div>

                        <div className="col2">
                            <InputModel
                                defaultValue={ model }
                                onChange={ (model) => setModel(model) }
                            />
                        </div>

                    </div>

                    <div className="version">
                        <InputVersion
                            defaultValue={ version }
                            onChange={ (version) => setVersion(version) }
                        />
                    </div>

                </div>

            </div>

            <div className="third">
                <span> > Busca Avançada</span>
                <div className="buttonArea">
                   <span>Limpar Filtros</span> 
                   <button>Ver Ofertas</button>
                </div>

            </div>

        </S.SearchBar>
    )
}

export default SearchBar