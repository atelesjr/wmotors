import styled from 'styled-components';
import { color } from 'styles/theme';

export const Text = styled.div`
    position: relative;
    width: 100%;

    input {
        border: .1rem solid ${color.gray_300};
        padding: .7rem .2rem .7rem 6.8rem;
        border-radius: .2rem;
        outline: none;
        width: 100%;
        font-weight: 600;
    }

    i.gps {
        position: absolute;
        top: .6rem;
        left: .7rem;

        font-size: 2rem;
        color: ${color.red_dark};
    }

    i.close {
        position: absolute;
        top: .8rem;
        right: .5rem;

        font-size: 1.5rem;

    }

    span{ 
        position: absolute;
        top: .8rem;
        left: 2.5rem;
    }

    :hover{
        input {
            border: .1rem solid ${color.gray_500};
        }

        span{
            color:  ${color.gray_500};
        }
    }
    
`