import React, { useEffect } from 'react'
import * as S from './styles'

const Tabs = ({ options, page, setPage, ...rest }) => {

    useEffect(() => {
    }, [ ])

    //to change page and tab selection
    const handleClick = (option) =>{
        setPage(option.page);
        rest.setSelected(option.name)
    }

    return (
        <S.Tabs>
            {
                options.map( (option, key) => (
                    <S.Transport selected={
                        rest.selected === option.name
                        ? true
                        : false
                    }
                        key={ key }
                        onClick={ () => handleClick(option) }        
                    >
                        { option.logo }        
                        <div className="text">
                            COMPRAR
                            <span>{option.name}</span>
                        </div>
                    </S.Transport>

                ))
            }
        </S.Tabs>
    )
}

export default Tabs