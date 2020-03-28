import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { SocialIcon } from 'react-social-icons';


//Styled Components
import { IMG, Icons, CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix, HeaderOne, HeaderTwo, MainContext, Title, ButtonOne } from './StyledWidgets';

const WelcomePage = () => {
    
    return (
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
            

            <CardOne>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <HeaderTwo>User-Interface</HeaderTwo>
                        <p>
                        This project was a study on HTML and CSS. I resized some images and texts to align with the website.
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
                    <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <HeaderTwo>WeddingGram</HeaderTwo>
                            <p>
                                This was my first build week at Lambda and I was a part of the UI team. Our app is called WeddingGram and this is an app to help newly engaged couples for their wedding preparations such as, finding a wedding planner, creating a timeline for their wedding, and posting their experience and questions that they may have for wedding planners. I was in charge of the How It Works, Wedding Day Timeline Table, and the Featured Wedding Planners carousel sections. I was also in charge of the About Us context and the Meet the Team tabs.
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
                    <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <HeaderTwo>GitHub-UserCard</HeaderTwo>
                            <p>
                            In this project we learned how to access the GitHub API and built a social card based on the data we got back. One of the main goals was to create a component based on the data we got back when we sent a GET request to the GitHub API.<br/> 
                            This project consists of:
                            <li>Creating DOM components with Javascript Functions.</li>
                            <li>Utilizing 3rd party libraries (axios)</li>
                            <li>Promises, .then & .catch</li>
                            <li>HTTP GET requests</li>
                            <li>Array Methods</li>
                            <li>DOM</li>
                            <li>Element selection</li>
                            <li>Basic DOM manipulation</li>
                            <li>Events and event listeners</li>
                                
                            </p>

                            <ButtonOne>
                                <Button variant="primary" href="https://github.com/AlexisPanyathong/React-Github-User-Card" target="_blank">View Code</Button>
                            </ButtonOne>

                            <Button variant="primary" href="https://alexisp-github-usercard.netlify.com/" target="_blank">View Website</Button>
                        </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>
            </CardThree>
            
            <CardFour>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <HeaderTwo>Form Management</HeaderTwo>
                            <p>
                                This project demonstrates proficiency by creating an application that has a registration page and let's you register a new user. Once a user is registered, you can fetch data and render it to the DOM.<br/>
                                This project consists of:
                                <li>A registration form built with formik - include inputs for a username and a password.</li>
                                <li>Form validation using Yup</li>
                                <li>At least one class component (I would challenge you to make the form a class!)</li>
                                <li>Tests for at least one element, one event, and one unit test for a function.</li>
                                <li>A POST request made from the registration form to http://localhost:5000/api/register to add a user. </li>
                                <li>A GET request made to http://localhost:5000/api/restricted/data to retrieve the data. </li>
                                <li>Map over the array of objects you recieve and render some or all of it's information to the DOM.</li>		
                            </p>
                            <Button variant="primary" href="https://github.com/AlexisPanyathong/github-usercard" target="_blank">View Here</Button>
                        </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>
            </CardFour>

            <CardFive>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <HeaderTwo>Java SnackBar</HeaderTwo>
                            <p>
                            The main object of this project is to set up vending machines where a person buys snacks from those machines.<br/>
                                This project consists of:
                                <li>Use the Java Development Kit (JDK)</li>
                                <li>Use and manipulate Java base data types</li>
                                <li>Construct Java classes including instantiating and using Java Objects</li>
                                <li>Use and manipulate Java base data types	</li>
                            </p>
                            <Button variant="primary" href="https://github.com/AlexisPanyathong/java-SnackBar/tree/alexis-panyathong-2" target="_blank">View Here</Button>
                        </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>
            </CardFive>

            <CardSix>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
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
            
            <footer className="social-icons">
                <Icons>
                    <SocialIcon url="https://twitter.com/Alex_Panyathong" style={{ height: 40, width: 70 }} target="_blank"/>    
                    <SocialIcon url="mailto:alexispanyathong@gmail.com?subject=here" style={{ height: 40, width: 70 }} fgColor="#FF0505" bgColor="#4E4E4E" target="_blank"/>  
                    <SocialIcon url="https://www.linkedin.com/in/alexis-panyathong/" style={{ height: 40, width: 70 }} fgColor="#FFFFFF" bgColor="#0e76a8" target="_blank"/>      
                </Icons>
                
            </footer>

        </div>
    )
}

export default WelcomePage;