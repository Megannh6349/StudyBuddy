import React, { Component } from "react";
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

export default class Questions extends Component {

    // var NewComponent = React.createClass({

    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="Description" content="Enter your description here" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
                {/*Import Google Icon Font*/}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                {/*Import materialize.css*/}
                <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
                {/* Compiled and minified CSS */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
                {/* <link rel="stylesheet" href="questionsPseudocode.css" /> */}
                {/* <title>Questions</title>
                <title>Project Name</title> */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* <div className="container-fluid" id="questions"> */}
                {/* <h1>Tell us about you</h1>
                    <h3>How old are you?</h3>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6"> */}
                {/* <input placeholder={42} id="age" type="number" min={18} max={99} className="validate" /> */}
                {/* <label htmlFor="age">Age</label>
                            </div>
                        </div>
                    </form> */}
                {/* User Years of Experience */}
                {/* <h3>How many years of experience do you have?</h3>
                    <div className="container-fluid choices">
                        <form id="userYearsExperienceQuestion" action="#">
                        </form>
                    </div> */}
                {/* User Proficiency */}
                {/* <h3>Which languages and skills are you proficient in?</h3>
                    <form id="userCodingAbilitiesQuestion" action="#">
                    </form> */}
                {/* User Stack */}
                {/* <h3>What would you consider your strong suit?</h3>
                    <form id="userStackQuestion" action="#">
                    </form> */}
                {/* User Spoken Language */}
                {/* <h3>What language(s) do you speak?</h3>
                    <form id="userSpokenLangQuestion" action="#">
                    </form> */}
                {/* User Remote Preference */}
                {/* <h3>Would you prefer to work in person or remote?</h3>
                    <form id="userRemotePrefQuestion" action="#">
                    </form> */}
                {/* User Distance Preference */}
                {/* <h3>What's the furthest you'd like your partner to be from you?</h3>
                    <form id="userDistancePrefQuestion" action="#">
                    </form> */}
                {/* Looking for */}
                {/* <h1>Now tell us what you're looking for</h1>
                    <h3>How old would you like your partner to be?</h3>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder={18} id="min_age" type="number" min={18} max={99} className="validate" />
                                    <label htmlFor="fmin_age">Minimum</label>
                                </div> */}
                {/* <div className="input-field col s6">
                                    <input placeholder={99} id="max_age" type="number" min={18} max={99} className="validate" />
                                    <label htmlFor="min_age">Maximum</label>
                                </div>
                            </div>
                        </form>
                    </div> */}
                {/* Preferred Years of Experience */}
                {/* <h3>How many years of experience would you like your partner to have?</h3>
                    <form id="otherYearsExperienceQuestion" action="#">
                    </form> */}
                {/* Preferred Proficiency */}
                {/* <h3>Which languages and skills would you like your partner to be proficient in?</h3>
                    <form id="otherCodingAbilitiesQuestion" action="#">
                    </form> */}
                {/* Preferred Stack */}
                {/* <h3>What would your partner's ideal strong suit be?</h3>
                    <form id="otherStackQuestion" action="#">
                    </form> */}
                {/* Preferred Spoken Language */}
                {/* <h3>What language(s) would you like your partner to speak?</h3>
                    <form id="otherSpokenLangQuestion" action="#">
                    </form> */}
                {/* Preferred Remote Preference */}
                {/* <h3>Would you want your partner to prefer to work in person or remote?</h3>
                    <form id="otherRemotePrefQuestion" action="#">
                    </form> */}
                {/* User Distance Preference */}
                {/* <h3>What would your partner's ideal distance preference be?</h3>
                    <form id="otherDistancePrefQuestion" action="#">
                    </form> */}
                {/* Compiled and minified JavaScript */}


                <div className="login-form-container">
                    <Form>
                        <p>Tell us about yourself!</p>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="email" placeholder="name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@email.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>How old are you?</Form.Label>
                            <Form.Control type="number" placeholder="42" min={18} max={99} className="validate" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>How many years of experience do you have?</Form.Label>
                            <Form.Control as="select">
                                <option>6 Months or Less</option>
                                <option>6 Months - 1 Year</option>
                                <option>1 - 3 Years</option>
                                <option>3 - 5 Years</option>
                                <option>5 - 8 Years</option>
                                <option>8 + Years</option>
                            </Form.Control>
                            <Form>
                                {/**Need to find documentation for checkbox bootstrap */}
                                <Form.Label>Which languages & skills are you proficient in?</Form.Label>
                                {[','].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            custom
                                            type={type}
                                            id={`inline-${type}`}
                                            label={`HTML`}
                                        />

                                    </div>
                                ))}
                            </Form>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>What would you consider your strong suit?</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>Front-End</option>
                                    <option>Back-End</option>
                                    <option>Full-Stack</option>
                                    <option>None, I suck at coding</option>
                                </Form.Control>
                            </Form.Group>
                            <Form>
                                {/**Need to find documentation for checkbox bootstrap */}
                                <Form.Label>Which language(s) do you speak?</Form.Label>
                                {[','].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            custom
                                            type={type}
                                            id={`inline-${type}`}
                                            label={`English`}
                                        />

                                    </div>
                                ))}
                            </Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Do you prefer to work in person or remote?</Form.Label>
                                <Form.Control as="select">
                                    <option>In Person</option>
                                    <option>Remote</option>
                                    <option>Either</option>
                                </Form.Control>
                                <h1> </h1>
                                <p>Now Tell Us What You're Looking For</p>
                                <Form.Label>How old would you like your partner to be?</Form.Label>
                                <input placeholder={18} id="min_age" type="number" min={18} max={99} className="validate" />
                                <label htmlFor="fmin_age">Minimum</label>
                                <input placeholder={99} id="max_age" type="number" min={18} max={99} className="validate" />
                                <label htmlFor="min_age">Maximum</label>
                                <Form.Label>How many years of experience would you like your partner to have?</Form.Label>
                                <Form.Control as="select">
                                <option>6 Months or Less</option>
                                <option>6 Months - 1 Year</option>
                                <option>1 - 3 Years</option>
                                <option>3 - 5 Years</option>
                                <option>5 - 8 Years</option>
                                <option>8 + Years</option>
                            </Form.Control>
                            <Form.Label>Which Languages & Skills would you like your partner to be proficient in?</Form.Label>
                            {[','].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            custom
                                            type={type}
                                            id={`inline-${type}`}
                                            label={`HTML`}
                                        />

                                    </div>
                                ))}
                                <Form.Label>What would your partner's ideal strongsuit be?</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>Front-End</option>
                                    <option>Back-End</option>
                                    <option>Full-Stack</option>
                                </Form.Control>
                                <Form.Label>What Languages would you like your partner to speak?</Form.Label>
                                {[','].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            custom
                                            type={type}
                                            id={`inline-${type}`}
                                            label={`English`}
                                        />

                                    </div>
                                ))}
                                <Form.Label>Where would you like to work with your partner?</Form.Label>
                                <Form.Control as="select">
                                    <option>In Person</option>
                                    <option>Remote</option>
                                    <option>Either</option>
                                </Form.Control>
                                <Form.Label>{/*Add Distance question*/}</Form.Label>
                            </Form.Group>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}