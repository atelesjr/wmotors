import styled from 'styled-components';
import { color } from 'styles/theme';

export const Dropdown = styled.div`
    position: relative;    
    display: inline-block;

    border: .1rem solid ${color.gray_200};
    border-radius: .2rem;
    width: 100%;
    font-weight: 600;
    box-sizing: border-box;
    padding: 1.5rem .5rem 1.2rem;

    user-select: none;
    cursor: pointer;

    &:hover{
        border: .1rem solid ${color.gray_400};

        i{
            color: ${color.gray_500};
        }
    }
    
    .selected {

        span{
            font-weight: 400;
        }

        i {
            position: absolute;
            top: ${ props => props.opened ? '2.3rem' : '1.8rem'};
            right: .5rem;
            line-height: 1pt;
            color: ${color.gray_400};
            
            ${
                props => props.opened && (`transform: rotate(180deg);`)
            }
        }
    }

    .options{
        position: absolute;
        bottom: -14rem;
        left: 0;
        z-index: 10;

        padding-top: .7rem;
        border: 1px solid ${color.gray_200};
        border-radius: 0  0 .2rem .2rem;
        background-color: ${color.light};
        width: 100%;
        height: 14rem;
        overflow-y: auto ;

        -webkit-box-shadow: -1px 10px 33px -14px rgba(0,0,0,0.5);
        -moz-box-shadow: -1px 10px 33px -14px rgba(0,0,0,0.5);
        box-shadow: -1px 10px 33px -14px rgba(0,0,0,0.5);

        /* width */
        &::-webkit-scrollbar {
            width: .5rem;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: ${ color.light }
        }
        
        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: ${ color.gray_200 }
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: ${ color.gray_300 } 
        }

        .option {
            display: flex;
            justify-content: flex-end;
            padding: .5rem 2rem .5rem 0;
            border-radius: .2rem;
            transition: all .2s ease-in-out;
        
            /* border: 1px solid blue; */

            &:hover{
                background-color: ${color.gray_200};
                color: ${color.light}
            }

            &:active{
                background-color: ${color.gray_200};
                color: ${color.gray_300}
            }
        }
    }                        
`