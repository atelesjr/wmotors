import styled from 'styled-components';
import { color, device } from 'styles/theme';

export const Button = styled.button`
    
    padding: 1.2rem  .3rem;
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

    @media ${ device.tablet }{
        font-size: 1.1rem;
        padding: 1.2rem  5rem;
    }

    @media ${ device.laptop }{
        font-size: 1.4rem;
        padding: 1.2rem  7rem;
    }
`

export const ButtonSecundary = styled.button`
    padding: .3rem 2rem;
    border-radius: .4rem;
    border: .2rem solid ${color.orange_dark};
    background-color: transparent;
    color:  ${color.orange_dark};
    font-size: 1.1rem;
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

    @media ${ device.tablet }{
        padding: .7rem 4rem;
        font-size: 1.4rem;

    }

    @media ${ device.laptop }{
        
    }
`