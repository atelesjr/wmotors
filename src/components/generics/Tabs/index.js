import React, { useEffect } from 'react'
import * as S from './styles'

const Tabs = ({ options, page, setPage }) => {

    useEffect(() => {
     
    }, [page])

    return (
        <S.Tabs>
            {
                options.map( (option, key) => (
                    <S.Transport selected={option.selected}
                        key={ key }
                        onClick={ () => setPage(option.page)}        
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