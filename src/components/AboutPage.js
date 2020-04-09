import React from 'react';
import Card from 'react-bootstrap/Card';
import { SocialIcon } from 'react-social-icons';
import Button from 'react-bootstrap/Button';


//Styled Components
import { SkillsCard, HeaderTwo, AboutIcons, AboutButton } from './StyledWidgets';

const AboutPage = () => {

    return (
        <div>
            <SkillsCard>
            <Card className="text-center">
                
                <Card.Body>
                    <HeaderTwo>Skills</HeaderTwo>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                    </ul>
                   

                    <AboutButton>
                        <Button variant="primary" href=" https://docs.google.com/document/d/1WUcTeJ2wYuxPzV8t8xMX08lvOhN6y89h2BLsLCebgzg/edit?usp=sharing" target="_blank">View Resume</Button>
                    </AboutButton>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
            </SkillsCard>



            <footer className="social-icons">
                <AboutIcons>
                    <SocialIcon url="https://twitter.com/Alex_Panyathong" style={{ height: 40, width: 70 }} target="_blank"/>    
                    <SocialIcon url="mailto:alexispanyathong@gmail.com?subject=here" style={{ height: 40, width: 70 }} fgColor="#FF0505" bgColor="#4E4E4E" target="_blank"/>  
                    <SocialIcon url="https://www.linkedin.com/in/alexis-panyathong/" style={{ height: 40, width: 70 }} fgColor="#FFFFFF" bgColor="#0e76a8" target="_blank"/> 
                    <SocialIcon url="https://www.github.com/AlexisPanyathong" style={{ height: 40, width: 70 }} fgColor="#FFFFFF" bgColor="#000000" target="_blank"/>      
                </AboutIcons>
                    
            </footer>
        </div>
    )
}


export default AboutPage;