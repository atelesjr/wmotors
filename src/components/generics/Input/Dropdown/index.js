import React, { useState, useEffect } from 'react'
import * as S from './styles'

const InputDropdown = ({ defaultValue, options, onChange, label, placeholder, ...rest }) => {
    const [selected, setSelected] = useState(defaultValue)
    const [opened, setOpened ] = useState(false)
   

    useEffect(()=>{
        onChange(selected)
    }, [selected, onChange])

    useEffect(()=>{
        rest.clear && setSelected(defaultValue)
        rest.setClear(false)
    }, [rest, defaultValue])

    const list = options || [];
    const selectedOption = list.find( option => option.id === selected ) || []
    return (
        <S.Dropdown opened={ opened }>
            <div 
                className="selected"
                onClick={ () => setOpened(!opened) }
            >
                <span>
                    { 
                        label 
                        ? label 
                        : (!selected) && placeholder
                    } 
                </span> 
                {  selectedOption.name || defaultValue  }
                <i className="fas fa-sort-down" />
            </div>

            {
                opened && (
                    <div className="options">
                       { 
                           list.map( option => (
                                <div 
                                    className="option" 
                                    key={option.id}
                                    onClick={ () => { setSelected(option.id);  setOpened(false) } }
                                >
                                    { option.name }
                                </div>
                            ))
                        }

                    </div>
                )
            }
            
        </S.Dropdown>
    )
}

export default InputDropdown;

/*
const options = [
    { id: 1, option: "Português", value: 'pt', image: pt },
    { id: 2, option: "English", value: 'en', image: en },
    { id: 3, option: "Español", value: 'es', image: es },
]
*/