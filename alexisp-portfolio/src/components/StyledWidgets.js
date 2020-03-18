import styled from 'styled-components';

export const IMG = styled.div`
.img-container {
    width: 60%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

img {
    display: flex;
    justify-content: center;
}
`;

//Footer
export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }
`;