import styled from 'styled-components';
import { color } from 'styles/theme';

export const SearchBar = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    width: 100%;
    height: 31.2rem;
    box-sizing: border-box;
    padding: 2.5rem 4.5rem;
    background-color: ${ color.light };

    .first {
        display: flex;
        justify-content: flex-start;
        padding-left: 2.1rem;
    }

    .second {
        display: flex;
        width: 100%;

        .col1, .col2 {
            box-sizing: border-box;
        }

        .col1 {
            margin-right: .5rem;
            width: 55%;

            .location{
                display: flex;
                margin-bottom: 3rem;

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
                
                .col1, .col2 {
                    width: 49%;
                }
            }
        }

        .col2{
            margin-left: .5rem;
            width: 45%;

            .brandModel {
                display: flex;
                margin-bottom: 3rem;

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

`