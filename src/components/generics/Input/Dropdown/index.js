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
                { selected }
                <i className="fas fa-sort-down" />
            </div>

            {
                opened && (
                    <div className="options">
                       { 
                           options.map( (list, key) => (
                                <div 
                                    className="option" 
                                    key={key}
                                    onClick={ () => { setSelected(list.option);  setOpened(false) } }
                                >
                                    {list.option}
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

