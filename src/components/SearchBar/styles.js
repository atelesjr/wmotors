import styled from 'styled-components';
import { color } from 'styles/theme';

export const SearchBar = styled.div`
    display: flex;
    flex-flow: column;

    width: 100%;
    height: 31.2rem;
    box-sizing: content-box;
    padding: 2.5rem 4.5rem;
    background-color: ${ color.light };

    .first {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 1rem;
        padding-left: 2rem;
    }

    .second {
        display: flex;

        width: 100%;

        .col1, .col2 {
            width: 50%;
            border: 1px solid red;
            box-sizing: content-box;
        }

        .col1 {
            margin-right: .5rem;

            .location{
                display: flex;
                box-sizing: content-box;

                .city{
                    width: calc(100% - 10.5rem);
                }

                .radius {
                    width: 10rem;
                }


            }
        }

        .col2{
            margin-left: .5rem;
        }

        input {
            width: 100%;
        }
    }

`