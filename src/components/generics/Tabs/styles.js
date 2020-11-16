import styled from 'styled-components';
import { color, device } from '../../../styles/theme';

export const Tabs = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    user-select: none; 
`

export const Transport = styled.div`
    display: flex;
    align-items: center;

    padding: 1rem 2rem;
    color:  ${ props => props.selected ? color.red : color.gray_400 };
    box-sizing: content-box;
    ${ props => props.selected && `border-bottom: .3rem solid ${color.red};` } 
    
    i{
        font-size: 1.8rem;
        margin-right: 1rem;
    }

    .text{
        font-size: 1rem;
        font-weight: 700;

        span{
            display: block;

            width: 100%;
            font-size: 1.7rem;
            font-weight: 400;
            letter-spacing: -1px;
        }
    }

    &:hover{
        color: ${color.red};
    }


    @media ${ device.tablet}{
        i{
            font-size: 3rem;
        }

        .text {
            font-size: 1.1rem;

            span{
                font-size: 2.5rem;
            }
        }
    }

`