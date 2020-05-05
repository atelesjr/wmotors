import styled from 'styled-components';
import { color } from 'styles/theme';

export const Button = styled.button`
    
    padding: 1.2rem  7rem;
    border-radius: .4rem;
    border: .2rem solid ${color.red};
    background-color: ${color.red};
    color:  ${color.light};
    font-weight: 700;
    outline: none;
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:hover, :active{
        border: .2rem solid ${color.red_dark};
        background-color:  ${color.red_dark};
    }

    &:active{
        border: .2rem solid ${color.red_light} ;
        background-color:  ${color.red_light};
    }
`

export const ButtonSecundary = styled.button`
    
    padding: .7rem 4rem;
    border-radius: .4rem;
    border: .2rem solid ${color.orange_dark};
    background-color: transparent;
    color:  ${color.orange_dark};
    font-weight: 700;
    outline: none;
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:hover, :active{
        background-color:  ${color.orange_dark};
        color: ${color.light}
    }

    &:active{
        border: .2rem solid ${color.orange} ;
        background-color:  ${color.orange};
        color: ${color.light}
    }
`