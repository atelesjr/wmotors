import styled from 'styled-components';
import { color } from 'styles/theme';

export const CheckBox = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    margin-right: 10rem;
    
    input{
        display: none;
    }

    label {
        user-select: none;
        cursor: pointer;
        padding-left: .8rem;
        line-height: 1.3;;
        transition: all .1s ease-in;  

        span {
            position: absolute;
            left: -2rem;
            top: -.15rem;

            height: 1.7rem;
            width: 1.7rem;
            border: 1px solid ${color.gray_300};
            border-radius: .3rem;

            &::after {
                display: block;
                position: absolute;
                left: .5rem;
                top: 0;

                content: "";
                box-sizing: unset;
                height: 1rem;
                width: .5rem;
                border: solid ${ color.red_dark };
                border-width: 0 3px 4px 0;
                transform: rotate(45deg);
                opacity: 0;
                transition: opacity .1s ease-in;  
            }
        }

        &:hover  {
            color: ${ color.gray_500};
            span {
                border: 1px solid black;
            }
        }
    }
    
    input:checked ~ label  span {
        border: 1px solid ${ color.red_dark };
        &::after {
            opacity: 1; 
        }
    }

`