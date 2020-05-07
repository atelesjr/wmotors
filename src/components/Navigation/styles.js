import styled from 'styled-components';
import { color, device } from 'styles/theme';

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    box-sizing: content-box;

    .tabs {
        display: flex;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        
        .transport {
            display: flex;
            align-items: center;

            padding: 1.5rem 3rem;
            border: 1px solid darkgrey;
            color:  ${color.gray_400};
            box-sizing: content-box;
            
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
                color: ${color.red};
                border-bottom: .3rem solid ${color.red};
            }
        }     
    }

    button {
        display: block;
    }

    @media ${ device.tablet}{
        button {
            display: block;
        }
        
    }


`