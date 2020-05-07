import styled from 'styled-components';
import { color, device } from 'styles/theme';

export const Text = styled.div`
    position: relative;
    width: 100%;

    input {
        border: .1rem solid ${color.gray_200};
        border-right: none;
        padding: 1.5rem .2rem 1.2rem 6.8rem;
        border-radius: .2rem;
        outline: none;
        width: 100%;
        font-size: 1.1rem;
        font-weight: 600;
        color:  ${color.gray_400};
    }

    i.gps {
        position: absolute;
        top: 1.3rem;
        left: .7rem;

        font-size: 1.7rem;
        color: ${color.red};
    }

    i.close {
        position: absolute;
        top: 1.5rem;
        right: .5rem;

        font-size: 1.2rem;
        cursor: pointer;

        &:hover {
            color: ${ color.red }
        }

    }

    span{ 
        position: absolute;
        top: 1.5rem;
        left: 2.5rem;

        font-size: 1.1rem;
    }

    :hover{
        input {
            border: .1rem solid ${color.gray_400};
        }

        span{
            color:  ${color.gray_500};
        }
    }

    @media ${ device.laptop }{
        input {
            font-size: 1.4rem;
        }

        i.gps{
            font-size: 2rem;
        }

        i.close{
            font-size: 1.5rem;
        }

        span{
            font-size: 1.4rem;
        }
    }  
    
`