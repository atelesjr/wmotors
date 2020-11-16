import styled from 'styled-components';
import { color, device } from '../../styles/theme';

export const SearchBar = styled.div`
    width: 100%;
    height: 31.2rem;
    box-sizing: border-box;
    padding: 1.5rem 1.5rem;
    background-color: ${ color.light };

    &>div{
        display: flex;
        flex-flow: column;
        justify-content: space-between;

        height: 100%;
    }

    .first {
        display: flex;
        justify-content: flex-start;
        padding-left: 2.1rem;
    }

    .second {
        display: flex;
        flex-flow: column;

        width: 100%;

        .col1, .col2 {
            box-sizing: border-box;
        }

        .col1 {
            width: auto;

            .location{
                display: flex;
                margin-bottom: 1rem;

                .city{
                    width: calc(100% - 12rem);
                    box-sizing: border-box;
                }

                .radius {
                    width: 12rem;
                    box-sizing: border-box;    
                }
            }

            .yearPrice {
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem; 
                
                .col1, .col2 {
                    width: 49%;
                }
            }
        }

        .col2{
            width: auto;

            .brandModel {
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem;

                .col1, .col2 {
                    width: 49%
                }
            }
        }   
    }

    .third{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        margin-bottom: 1rem;
        font-size: 1.1rem;

        & > span{
            color: ${color.red};
            font-weight: 600;
            user-select: none;
            cursor: pointer;

            &:hover{
                color: ${color.red_dark};
            }
        }
    }

    .btnArea{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 45%;

        span {
            cursor: pointer;

            &:hover{
                color: ${ color.gray_500 }
            }
        }
    }

    @media ${ device.tablet}{
        height: 31.2rem;
        padding: 2.5rem 4.5rem;

        .second{
            flex-flow: row;

            .col1{
                margin-right: .5em;
                width: 55%;
                
                .location{
                    margin-bottom: 3rem;
                }

                .yearPrice {
                    margin-bottom: 0rem; 

                    .col1, .col2 {
                        width: 49%;
                    }                   
                }
            }

            .col2{
                margin-left: .5rem;
                width: 45%;

                .brandModel {
                    margin-bottom: 3rem;
                }
            }
        }
        
    }

    @media ${ device.laptop}{

        .third{
            font-size: 1.4rem;
        }
    
    }

`