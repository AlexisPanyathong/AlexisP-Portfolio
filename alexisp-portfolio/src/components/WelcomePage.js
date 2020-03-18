import React from 'react';
import Card from 'react-bootstrap/Card';
import { SocialIcon } from 'react-social-icons';


//Styled Components
import { IMG, Icons } from './StyledWidgets';

const WelcomePage = () => {
    
    return (
        <div className='welcome-page'>
            <Card style={{ width: '40%', margin: '0 auto', marginBottom: '50px', marginTop: '20px', textAlign: 'center'}}>
                <Card.Body>
                    <Card.Title>Alexis Panyathong</Card.Title>
                    <p>Full Stack Web Developer</p>
                    
                    <IMG>
                        <img className="img-container" src={require('/Users/alexispanyathong/Documents/Lambda School/AlexisP-Portfolio/alexisp-portfolio/src/imgs/IMG_9272-WM-resize.jpg')} alt="img of Alexis." />
                    </IMG>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

            <footer className="social-icons">
                
                
                <Icons>
                    <SocialIcon url="https://twitter.com/Alex_Panyathong" style={{ height: 40, width: 70 }} target="_blank"/>    
                    <SocialIcon url="mailto:alexispanyathong@gmail.com?subject=here" style={{ height: 40, width: 70 }} fgColor="#FF0505" bgColor="#4E4E4E" target="_blank"/>
                            
                </Icons>
                
            </footer>

        </div>
    )
}

export default WelcomePage;