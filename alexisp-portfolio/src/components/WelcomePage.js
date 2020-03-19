import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
                    Highly determined, motivated Full Stack Web Developer with a passion for web application development. As I built many web applications I have gained a massive amount of experience with working on multiple languages. I am seeking a new opportunity that will allow me to further expand these skills. 
                    </Card.Text>
                    <a href="https://www.linkedin.com/in/alexis-panyathong" target="_blank">LinkedIn</a>
                </Card.Body>
            </Card>

            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>User-Interface</Card.Title>
                    <Card.Text>
                    This project was a study on HTML and CSS. I resized some images and texts to align with the website.
                    </Card.Text>
                    <Button variant="primary"                     href="https://github.com/AlexisPanyathong/User-Interface" target="_blank">View Here</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>GitHub-UserCard</Card.Title>
                        <Card.Text>
                        In this project we learned how to access the GitHub API and built a social card based on the data we got back. One of the main goals was to create a component based on the data we got back when we sent a GET request to the GitHub API. 
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
							
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/AlexisPanyathong/github-usercard" target="_blank">View Here</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Form Management</Card.Title>
                        <Card.Text>
                            This project demonstrates proficiency by creating an application that has a registration page and let's you register a new user. Once a user is registered, you can fetch data and render it to the DOM.
                            This project consists of:
                            <li>A registration form built with formik - include inputs for a username and a password.</li>
                            <li>Form validation using Yup</li>
                            <li>At least one class component (I would challenge you to make the form a class!)</li>
                            <li>Tests for at least one element, one event, and one unit test for a function.</li>
                            <li>A POST request made from the registration form to http://localhost:5000/api/register to add a user. </li>
                            <li>A GET request made to http://localhost:5000/api/restricted/data to retrieve the data. </li>
                            <li>Map over the array of objects you recieve and render some or all of it's information to the DOM.</li>		
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/AlexisPanyathong/github-usercard" target="_blank">View Here</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Java SnackBar</Card.Title>
                        <Card.Text>
                        The main object of this project is to set up vending machines where a person buys snacks from those machines.
                            This project consists of:
                            <li>Use the Java Development Kit (JDK)</li>
                            <li>Use and manipulate Java base data types</li>
                            <li>Construct Java classes including instantiating and using Java Objects</li>
                            <li>Use and manipulate Java base data types	</li>
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/AlexisPanyathong/java-SnackBar/tree/alexis-panyathong-2" target="_blank">View Here</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
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