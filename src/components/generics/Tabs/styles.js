import styled from 'styled-components';
import { color } from 'styles/theme';

export const Tabs = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    user-select: none; 
`

export const Transport = styled.div`
    display: flex;
    align-items: center;

    padding: 1.5rem 3rem;
    color:  ${ props => props.selected ? color.red_dark : color.gray_400 };
    box-sizing: content-box;
    ${ props => props.selected && `border-bottom: .3rem solid ${color.red_dark};` } 
    
    i{
        font-size: 3rem;
        margin-right: 1rem;
    }

    .text{
        font-size: 1.1rem;
        font-weight: 700;

        span{
            display: block;

            width: 100%;
            font-size: 2.5rem;
            font-weight: 400;
            letter-spacing: -1px;
        }
    }

    &:hover{
        color: ${color.red_dark};
    }

`