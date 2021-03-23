import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'  
require('../styles/home.scss');

export default class Home extends Component {
    render() {
        return (
            <div className="home-component">
                <div className="container-fluid page" > 
                    <Carousel>  
                        <Carousel.Item >  
                            <img
                            className="d-block w-100 h-100"  
                            src={'assets/home_resources/Carousel1.jpg'}  />  

                            {/* <Carousel.Caption>  
                                <h3>First</h3>  
                            </Carousel.Caption>   */}
                        </Carousel.Item  >  
                                    
                        <Carousel.Item >  
                            <img
                            className="d-block w-100 h-100"  
                            src={'assets/home_resources/Carousel2.jpg'}    />  
                            
                            {/* <Carousel.Caption>  
                                <h3>Second</h3>  
                            </Carousel.Caption>   */}
                        </Carousel.Item>  

                        <Carousel.Item style={{}}>  
                            <img
                            className="d-block w-100 h-100"  
                            src={'assets/home_resources/Carousel3.jpg'}   />  
                            
                            {/* <Carousel.Caption>  
                                <h3>Third</h3>  
                            </Carousel.Caption>   */}
                        </Carousel.Item>  
                    </Carousel>  

                    <Container fluid className="stat">
                        {/* Food Insecurity stats */}
                        <Row className="charts">
                            <Col>
                                <Row className="titleLink">
                                    <a href='https://hope4college.com/wp-content/uploads/2019/03/RealCollege-CCCCO-Report.pdf' target="_blank" >
                                        California Community Colleges #RealCollege Survey
                                    </a>
                                </Row>

                                <Row className="home-image-row">
                                    <Col xs={12} lg={4}>
                                        <Image src='assets/home_resources/Food Security Among California Community College Survey Respondents.JPG' fluid />
                                        <h3>Most Students Experience Food Insecurities</h3>
                                        <p>According to the 2016 and 2018 #RealCollege Survey, 50% of students experienced food insecurities in the last 30 days.
                                        From this group of students, 20% assessed at the low level of security and 30% at the lowest level.
                                        </p>
                                    </Col>

                                    <Col xs={12} lg={4}>
                                        <Image src='assets/home_resources/Self-Reported Grades by Basic Needs Insecurity Status.JPG' fluid />
                                        <h3>Food Insecurity Affects Grades</h3>
                                        <p>One metric reported was the correlation between food insecurity and grades. 
                                            Those who were experiencing food insecurities have a higher rate of receiving grades of C or below. </p>
                                    </Col>

                                    <Col xs={12} lg={4}>
                                        <Image src='assets/home_resources/Food Insecurity Items Among CUNY Survey Respondents.JPG' fluid />
                                        <h3>Meals Have to be Skipped</h3>
                                        <p>Because of financial trouble, most of these students are not able to eat healthy meals or 
                                            stayed hungry because they did not have enough money to buy food.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <div className="resource-rows">

                            <Row className="what-is-second-helpings">

                                <p className="what-is-second-helpings-title">
                                    <h2>What is Second Helpings?</h2>
                                    <br />
                                    <h3>Food for you!</h3>
                                </p>

                                <p>Second Helpings is a resource for students who are impacted by food insecurities. 
                                    Second Helpings provides an online access point for event organizers and departments 
                                    who have extra food to give that out to students in need.</p>

                                <p>Event organizers and deparments can post the food they are giving out, 
                                    in what location and at what time. Students can access these posts to get the resources
                                    they need to maximize their success.</p>

                                <p>Second Helpings mission to help students with food insecurities and cut down the food 
                                    thrown away on campus.</p>
                            </Row>

                            <Row className="other-resources">
                                Other Resources
                            </Row>

                            {/* Poly Pantry */}
                            <Row className="blue-background">
                                <Col xs={12} lg={5, {order:"first"}}>
                                    <a href="https://www.cpp.edu/basicneeds/food-resources/poly-pantry.shtml" target="_blank">
                                        <Image src="assets/home_resources/poly-pantry.png" roundedCircle fluid />
                                    </a>
                                </Col>

                                <Col xs={12} lg={7}>
                                    <h3>Poly Pantry</h3>
                                    <p>
                                    Poly Pantry was established in 2019 with the same intention as Second Helpings, serve impacted students. 
                                    Poly Pantry provides food and hygiene supplies to all students in the Bronco Student Center(BSC).
                                    </p>
                                </Col>
                            </Row>
                                
                            <Row className="blue-green-background">
                                <Col xs={12} lg={5, {order:"last"}}>
                                    <a href="https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program" target="_blank">
                                        <Image src="assets/home_resources/snap.png" roundedCircle fluid />
                                    </a>
                                </Col>

                                <Col xs={12} lg={7}>
                                    <h3>Supplemental Nutrition Assistance Program (SNAP)</h3>
                                    <p>
                                    SNAP is a federal program that provides benefits to low-income individuals 
                                    and families that are used at stores to purchase food. Eligiblity for the program can be found 
                                    <a href="https://www.fns.usda.gov/snap/recipient/eligibility" target="_blank"> here</a>.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="green-background">
                                <Col xs={12} lg={5, {order:"first"}}>
                                    <a href="https://www.fns.usda.gov/wic" target="_blank">
                                        <Image src="assets/home_resources/WIC.jpg" roundedCircle fluid />
                                    </a>
                                </Col>

                                <Col xs={12} lg={7}>
                                    <h3>Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)</h3>
                                    <p>
                                    WIC provides low-income pregnant, breastfeeding, and non-breastfeeding postpartum women 
                                    and infants and children up to age five who are at nutritional risk supplemental foods, 
                                    health care referrals, and nutrition education. Application for the program is done through your 
                                    state or local agency by appointment which can be found 
                                    <a href="https://www.fns.usda.gov/contacts?f%5B1%5D=program%3A32" target="_blank"> here</a>.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <div className="section-divider" />
                    </Container>
                </div> 
            </div>
        );
    }
}