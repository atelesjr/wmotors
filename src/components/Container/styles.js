import styled from 'styled-components';
import { device } from 'styles/theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100vh;
    box-sizing: content-box;
    
    z-index: 0;

    @media ${device.mobile} {
        overflow: scroll;
    }
`


;
// @media ${device.wide}{
//     border-left: 1px solid ${color.gray100};
//     border-right: 1px solid ${color.gray100};
// };
//padding: 2rem 1.5rem 1.5rem 1.5rem;