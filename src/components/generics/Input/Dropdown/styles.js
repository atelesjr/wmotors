import styled from 'styled-components';
import { color, device } from 'styles/theme';

export const Dropdown = styled.div`
    position: relative;    
    display: inline-block;

    border: .1rem solid ${color.gray_200};
    border-radius: .2rem;
    width: 100%;
    font-weight: 600;
    box-sizing: border-box;
    padding: 1.5rem .5rem 1.2rem;
    ${ props => !props.released && `filter: opacity(70%)`};

    user-select: none;
    cursor: ${ props => props.released ? 'pointer' : 'not-allowed'};

    ${ props => props.released && `
        &:hover{
            border: .1rem solid ${color.gray_400};

            i{
                color: ${color.gray_500};
            }
        }
    `}
    
    .selected {
        font-size: 1.1rem;

        span{
            font-weight: 400;
            font-size:inherit;
        }

        i {
            position: absolute;
            top: ${ props => props.opened ? '2.3rem' : '1.8rem'};
            right: .5rem;
            line-height: 1pt;

            font-size: 1.2rem;
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
            font-weight: 400;

            font-size: 1.1rem;
            text-align: right;
            
            transition: all .2s ease-in-out;
            
            /* border: 1px solid blue; */
            
            ${ props => props.released && `
                &:hover{
                    background-color: ${color.red};
                    color: ${color.light};
                }

                &:active{
                    background-color: ${color.red_dark};
                    color: ${color.light}
                }
            `}
        }
    }  

    @media ${ device.tablet}{
        .selected {
            font-size: 1.1rem;
            span{
                font-size:inherit;
            }

            i{
                font-size: 1.2rem;
            }
        }

        .options > .option {
            font-size: 1.1rem
        } 
    }      

    @media ${ device.laptop}{
        .selected {
            font-size: 1.4rem;
            span{
                font-size:inherit;
            }

            i{
                font-size: 1.4rem;
            }
        }

        .options > .option {
            font-size: 1.4rem

        }
    }                      
`