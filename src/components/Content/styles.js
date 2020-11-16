import styled from 'styled-components';
import { device } from '../../styles/theme';

export const Content = styled.div`
    display: flex;
    flex-flow: column;

    width: 100%;
    min-width: 32rem;
    max-width: 93.3rem;
    box-sizing: content-box;
    margin: 2rem 1.5rem 1.5rem;
    
    @media ${device.mobile} {
        overflow: scroll;
    }
`