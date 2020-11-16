import styled from 'styled-components';
import { color, device } from '../../../../styles/theme';

export const CheckBox = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    margin-right: 5rem;
    
    input{
        display: none;
    }

    label {
        user-select: none;
        cursor: pointer;
        
        line-height: 1.3;;
        transition: all .1s ease-in;  
        font-size: 1.1rem;
        padding-left: .2rem;

        span {
            position: absolute;
            left: -2rem;
            top: -.15rem;

            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid ${color.gray_300};
            border-radius: .2rem;

            &::after {
                display: block;
                position: absolute;
                left: .5rem;
                top: -.1rem;

                content: "";
                box-sizing: unset;
                height: 1rem;
                width: .3rem;
                border: solid ${ color.red };
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
        border: 1px solid ${ color.red };
        &::after {
            opacity: 1; 
        }
    }

    @media ${ device.laptop }{
       
        label{
            font-size: 1.4rem;
            padding-left: .8rem;

            span {
                width: 2rem;
                height: 2rem;

                &::after{
                    top: 0;

                    height: 1rem;
                    width: .5rem;
                }
            }
        }
    }

`