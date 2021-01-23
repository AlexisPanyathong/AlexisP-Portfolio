import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { SocialIcon } from 'react-social-icons';


//Styled Components
import { IMG, Icons, CardOne, CardTwo, CardThree,CardSix, HeaderOne, HeaderTwo, MainContext, Title, ButtonOne, ImgSix, ImgThree, ImgOne, ImgTwo, SkillsCard, AboutButton, List, MainPage, CardSeven } from './StyledWidgets';

const WelcomePage = () => {
    
    return (
        <MainPage>
            <div className='welcome-page'>
                
                    <Card style={{ width: '40%', margin: '0 auto', marginBottom: '50px', marginTop: '20px', textAlign: 'center'}}>
                    <MainContext>
                        <Card.Body>
                            <HeaderOne>Alexis Panyathong</HeaderOne>
                            <Title>Full Stack Web Developer</Title>
                            
                            <IMG>
                                <img className="img-container" src={require('../imgs/IMG_9272-WM-resize.jpg')} alt="img of Alexis." />
                            </IMG>
                            <p>
                            Highly determined, motivated Full Stack Web Developer with a passion for web application development. As I built many web applications I have gained a massive amount of experience with working on multiple languages. I am seeking a new opportunity that will allow me to further expand these skills. 
                            </p>
                            
                        </Card.Body>
                    </MainContext>
                    </Card>
                
                    <div>
                        <SkillsCard>
                            <Card className="text-center">
                            
                                <Card.Body>
                                    <HeaderTwo>Skills</HeaderTwo>
                                    <List>
                                        <ul>
                                            <li>JavaScript</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>React</li>
                                            <li>Python</li>
                                            <li>Java</li>
                                        </ul>
                                    </List>
                                    <AboutButton>
                                        <Button variant="primary" href=" https://docs.google.com/document/d/1WUcTeJ2wYuxPzV8t8xMX08lvOhN6y89h2BLsLCebgzg/edit?usp=sharing" target="_blank">View Resume</Button>
                                    </AboutButton>
                                </Card.Body>
                                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                            </Card>
                        </SkillsCard>
                    </div>

                <CardOne>
                    <Card className="text-center">
                        <Card.Header>
                            <ImgOne>
                                <img className="img-container" src={require('../imgs/header-img copy.png')} alt="snippet of user-interface."/>
                            </ImgOne>
                        </Card.Header>

                        <Card.Body>
                            <HeaderTwo>User-Interface</HeaderTwo>
                            <p>
                            This project was a study on HTML and CSS. I resized some images and texts to align with the website. This project was very fun because I had the opportunity to recreate a demo that was set up to see how well I could match the designs.
                            </p>

                            <ButtonOne>
                                <Button variant="primary" href="https://github.com/AlexisPanyathong/User-Interface" target="_blank">View Code</Button>
                            </ButtonOne>

                            {/* Need help on deploying this project. */}
                            <Button variant="primary" href="https://github.com/AlexisPanyathong/User-Interface" target="_blank">View Here</Button>
                        </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                    </Card>
                </CardOne>

                <CardTwo>
                    <Card className="text-center">
                        <Card.Header>
                            <ImgTwo>
                                <img className="img-container" src={require('../imgs/Screen Shot 2020-03-28 at 8.50.31 PM.png')} alt="snippet of WeddingGram."/>
                            </ImgTwo>
                        </Card.Header>
                            <Card.Body>
                                <HeaderTwo>WeddingGram</HeaderTwo>
                                <p>
                                    This was my first build week at Lambda and I was a part of the UI team. Our app is called WeddingGram and this is an app to help newly engaged couples for their wedding preparations such as, finding a wedding planner, creating a timeline for their wedding, and posting their experience and questions that they may have for wedding planners. I was in charge of the How It Works, Wedding Day Timeline Table, and the Featured Wedding Planners carousel sections. I was also in charge of the About Us context and the Meet the Team tabs. This project consists of: JavaScript, LESS, CSS, HTML, Responsive Design, and Pre-Processors.
                                </p>

                                <ButtonOne>
                                    <Button variant="primary" href="https://github.com/buildweek-weddingportfolio/User-Interface" target="_blank">View Code</Button>
                                </ButtonOne>

                                <Button variant="primary" href="https://w3dding-gram.netlify.com" target="_blank">View Website</Button>
                            </Card.Body>
                            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                    </Card>
                </CardTwo>

                <CardThree>
                    <Card className="text-center">
                        <Card.Header>
                            <ImgThree>
                                <img className="img-container" src={require('../imgs/Screen Shot 2020-03-28 at 9.07.47 PM.png')} alt="snippet of GitHub-UserCard."/>
                            </ImgThree>
                        </Card.Header>
                            <Card.Body>
                                <HeaderTwo>GitHub-UserCard</HeaderTwo>
                                <p>
                                In this project we learned how to access the GitHub API and built a social card based on the data we got back. One of the main goals was to create a component based on the data we got back when we sent a GET request to the GitHub API.
                                This project consists of: 
                                DOM components with Javascript Functions, Axios, Promises,HTTP GET requests, Array Methods, Element selection, Basic DOM manipulation, and Events and event listeners.
                                    
                                </p>

                                <ButtonOne>
                                    <Button variant="primary" href="https://github.com/AlexisPanyathong/React-Github-User-Card" target="_blank">View Code</Button>
                                </ButtonOne>

                                <Button variant="primary" href="https://alexisp-github-usercard.netlify.com/" target="_blank">View Website</Button>
                            </Card.Body>
                            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                    </Card>
                </CardThree>
                
                <CardSix>
                    <Card className="text-center">
                        <Card.Header>
                            <ImgSix>
                                <img className="img-container" src={require('../imgs/Screen Shot 2020-03-28 at 9.13.44 PM.png')} alt="snippet of Dungeon of the Haunted Forest."/>
                            </ImgSix>
                        </Card.Header>
                            <Card.Body>
                                <HeaderTwo>Dungeon of the Haunted Forest</HeaderTwo>
                                <p>
                                    I built an interactive Multi-User Dungeon (MUD) client and server with a small group. I chose to work in the Front End side by creating the Registration, Login, and NavBar components that connects to the back end that we used. I also did some UI design for the Welcome Page and NavBar. I used React and JavaScript throughout the project.
                                </p>

                                <ButtonOne>
                                    <Button variant="primary" href="https://github.com/build-week-mud/MUD-FE" target="_blank">View Code</Button>
                                </ButtonOne>

                                <Button variant="primary" href="https://dungeon-of-the-haunted-forest.netlify.com/" target="_blank">View Here</Button>

                                
                            </Card.Body>
                            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                    </Card>
                </CardSix>

                <CardSeven>
                    <Card className="text-center">
                        <Card.Header>
                            <ImgSix>
                                <img className="img-container" src={require('/Users/alexispanyathong/Documents/Lambda School/AlexisP-Portfolio/src/imgs/Screen Shot 2021-01-23 at 5.34.49 PM.png')} alt="snippet of Alexis Vilai Photography."/>
                            </ImgSix>
                        </Card.Header>
                            <Card.Body>
                                <HeaderTwo>Alexis Vilai Photography</HeaderTwo>
                                <p>
                                    As a photographer and a developer, I have decided to use my technical skills to build my own photography page from scratch. I mainly used React to build this website along with React Bootstrap. The main purpose of this website is to share a home page that display some of my photography work. I also have an About page that introduces myself and how I started my photography business. There is also a Portfolio page where it takes a customer to another tab that goes to my portfolio website, if they wanted to see more of my work. I also built a Booking page where my clients can easily book their session.
                                </p>

                                <ButtonOne>
                                    <Button variant="primary" href="https://github.com/AlexisNathavong/Alexis-Vilai" target="_blank">View Code</Button>
                                </ButtonOne>

                                <Button variant="primary" href="https://alexisvilaiphotography.netlify.app/" target="_blank">View Here</Button>

                                
                            </Card.Body>
                            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                    </Card>
                </CardSeven>
                
                <footer className="social-icons">
                    <Icons>
                        <SocialIcon url="https://twitter.com/Alex_Panyathong" style={{ height: 40, width: 70 }} target="_blank"/>    
                        <SocialIcon url="mailto:alexisnathavong@gmail.com?subject=here" style={{ height: 40, width: 70 }} fgColor="#FF0505" bgColor="#4E4E4E" target="_blank"/>  
                        <SocialIcon url="https://www.linkedin.com/in/alexis-nathavong/" style={{ height: 40, width: 70 }} fgColor="#FFFFFF" bgColor="#0e76a8" target="_blank"/>  
                        <SocialIcon url="https://www.github.com/AlexisNathavong" style={{ height: 40, width: 70 }} fgColor="#FFFFFF" bgColor="#000000" target="_blank"/>    
                    </Icons>
                    
                </footer>

            </div>
        </MainPage>
    )
}

export default WelcomePage;