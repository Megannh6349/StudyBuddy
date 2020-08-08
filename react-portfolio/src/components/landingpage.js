import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKz-xrdeXjER7N4LHnFVPMAst-yDVGnOUORw&usqp=CAU"
                            // alt="avatar"
                            // className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Find Your Match!</h1>

                            <hr />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

                            <div className="social-links">

                                {/* Login 
                                <a href="" rel="noopener noreferrer" target="_blank">
                                    <p>Log In</p>
                                    <i className="fa fa-sign-in" aria-hidden="true" />
                                </a> */}

                                {/*Sign Up  */}
                                <a href="" rel="noopener noreferrer" target="_blank">
                                    <p>Sign Up</p>
                                    <i className="fa fa-user-plus" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Landing;