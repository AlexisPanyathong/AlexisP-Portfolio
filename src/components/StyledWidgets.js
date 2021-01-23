import styled from 'styled-components';

//App Router
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100px;
    width: 100%;
    align-items: center;
    box-shadow: 8px 8px 10px #BFBFBF;
    background: #0A235C;
    
    a {
        
        margin-left: 70px;
        text-decoration: none;
        color: #F0F0F0;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }
`;

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

//Main Context Welcome Page
export const MainPage = styled.div`
    
`;

export const MainContext = styled.div`
    p {
        margin-top: 30px;
        font-size: 16px;
    }
`;

export const Title = styled.div`
    font-size: 18px;
`;

export const List = styled.div`
    li {
      text-align: left;  
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

export const CardOne = styled.div`
    margin: 0 auto;
    margin-bottom: 80px;
    width: 80%;
    p {
        font-size: 18px;
    }
`;

export const CardTwo = styled.div`
    margin: 0 auto;
    margin-bottom: 80px;
    width: 80%;    
    p {
        font-size: 18px;
    }
`;

export const CardThree = styled.div`
    margin: 0 auto;
    margin-bottom: 80px;
    width: 80%;
    p {
        font-size: 18px;
    }
`;

export const CardFour = styled.div`
    margin: 0 auto;
    margin-bottom: 80px;
    width: 80%;
    p {
        font-size: 18px;
    }
`;

export const CardFive = styled.div`
    margin: 0 auto;
    margin-bottom: 80px;
    width: 80%;
    p {
        font-size: 18px;
    }
`;

export const CardSix = styled.div`
    margin: 0 auto;
    margin-bottom: 80px;
    width: 80%;
    p {
        font-size: 18px;
    }
`;

export const CardSeven = styled.div`
    margin: 0 auto;
    margin-bottom: 80px;
    width: 80%;
    p {
        font-size: 18px;
    }
`;

//Header One
export const HeaderOne = styled.header`
    font-size: 35px;
    font-family: Lato regular;
`;

//Header Two
export const HeaderTwo = styled.header`
    font-size: 35px;
    font-family: Lato regular;
`;

// Button One
export const ButtonOne = styled.button`
    margin-right: 10px;
    border: none;
`;

// Imgs
export const ImgOne = styled.div`
    img {
        object-fit: contain;
        width: 20%;
    }
`;

export const ImgTwo = styled.div`
    img {
        object-fit: contain;
        width: 25%;
    }
`;

export const ImgThree = styled.div`
    img {
        object-fit: contain;
        width: 30%;
    }
`;

export const ImgSix = styled.div`
    img {
        object-fit: contain;
        width: 30%;
    }
`;

// About Page
export const SkillsCard = styled.div`
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 80px;
    width: 50%;
    box-shadow: 8px 8px 10px #BFBFBF;

    p {
        font-size: 18px;
    }

    ul {
        width: 20%;
        margin: 0 auto;
    }

`;

export const AboutButton = styled.button`
    margin-top: 15px;
    border: none;
`;

// About Footer
export const AboutIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 530px;
    
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