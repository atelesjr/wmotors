import React, { useState, useEffect } from 'react'
import * as S from './styles'

//compoments
import InputCheckBox from 'components/generics/Input/CheckBox'
import InputText from 'components/generics/Input/Text'
import InputDistance from 'components/Dropdowns/Distance'
import InputYear from 'components/Dropdowns/Year'
import InputPrice from 'components/Dropdowns/Price'
import InputBrand from 'components/Dropdowns/Brand'
import InputModel from 'components/Dropdowns/Model'
import InputVersion from 'components/Dropdowns/Version'
import Button from 'components/generics/Button'


const SearchBar = () => {

    //Inputs
    const [ newCar, setNewCar ] = useState(false);
    const [ secondHand, setSecondHand ] = useState(false);
    const [ distance, setDistance ] = useState('100km');
    const [ year, setYear ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ brand, setBrand ] = useState('Todas');
    const [ model, setModel ] = useState('Todos');
    const [ version, setVersion ] = useState('Todas');
    const [ city , setCity ] = useState('São Paulo');
    const [ clear, setClear ] = useState(false)

    //button
    const [ send, setSend ] = useState(false);

    const clearFilters = () => {
        setNewCar(false);
        setSecondHand(false);
        setCity('');
        setClear(true);
    }

    useEffect(() => {
        if (send) {
            console.log('Novo:', newCar)
            console.log('Usado:', secondHand)
            console.log('City:', city)
            console.log('Distance:', distance)
            console.log('Year:', year)
            console.log('Price:', price)
            console.log('Brand:', brand)
            console.log('Model:', model)        
            console.log('Version:', version) 
            setSend(false);
        }
    }, [ send, newCar, secondHand, city, distance, year, price, brand, model, version ])


    return (
        <S.SearchBar>
            <div className="first">
                <InputCheckBox 
                    label='Novos'
                    checked={ newCar }
                    onChange={ (e) => setNewCar(e) }
                />
                    
                <InputCheckBox 
                    label='Usados' 
                    checked={ secondHand }
                    onChange={ (e) => setSecondHand(e) }
                />
                    
            </div>

            <div className="second">
                <div className="col1">

                    <div className="location">
                        <div  className="city">
                            <InputText
                                name="Onde"
                                defaultValue={city}
                                onChange={ (city) => setCity(city) }
                                clearValue={ setCity }
                            />
                        </div>
                        <div  className="radius">
                            <InputDistance
                                defaultValue={ '100km' }
                                onChange={ (distance) => setDistance(distance)}
                                clear={ clear }
                                setClear={ setClear }
                            />                            
                        </div>

                    </div>

                    <div className="yearPrice">
                        <div className="col1">
                            <InputYear
                                defaultValue={ '' }
                                onChange={ (year) => setYear(year) }
                                clear={ clear }
                                setClear={ setClear }
                            />
                        </div>
                        <div className="col2">
                            <InputPrice
                               defaultValue={ '' }
                               onChange={ (price) => setPrice(price) }
                               clear={ clear }
                               setClear={ setClear }
                            />
                        </div>
                    </div>

                </div>

                <div className="col2">
                    <div className="brandModel">

                        <div className="col1">
                            <InputBrand
                                onChange={ (brand) => setBrand(brand) }
                                clear={ clear }
                                setClear={ setClear }
                            />
                        </div>

                        <div className="col2">
                            <InputModel
                                defaultValue={ 'Todos' }
                                onChange={ (model) => setModel(model) }
                                clear={ clear }
                                setClear={ setClear }
                                brand={ brand }
                            />
                        </div>

                    </div>

                    <div className="version">
                        <InputVersion
                            defaultValue={ 'Todas' }
                            onChange={ (version) => setVersion(version) }
                            clear={ clear }
                            setClear={ setClear }
                            model={model}
                        />
                    </div>

                </div>

            </div>

            <div className="third">
                <span> <i className="fas fa-angle-right" /> Busca Avançada</span>
                <div className="btnArea">
                   <span onClick={ () => clearFilters() }>Limpar Filtros</span> 
                   <Button 
                        label="Ver Ofertas"
                        onClick={ () => setSend(true) }
                    />
                </div>

            </div>

        </S.SearchBar>
    )
}

export default SearchBar