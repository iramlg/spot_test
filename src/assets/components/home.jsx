import React from 'react';

export class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="home-docs2" >
                <h1>Welcome to Back4App Docs</h1>
                <h2>Who should use Back4App?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="collums">
                    <div className="collum">
                        <img width="281" height="180" src="public/img/collum1.png" />
                        <div className="text">
                            <h3>Guides</h3>
                            <p>Lorem ipsum dolor sit am, consectetur ipsum dolor.</p>
                            <a>Type something</a>
                        </div>
                    </div>
                    <div className="collum">
                        <img width="281" height="180" src="public/img/collum2.png" />
                        <div className="text">
                            <h3>Troubleshooting</h3>
                            <p>Lorem ipsum dolor sit am, consectetur ipsum dolor.</p>
                            <a href="?page=troubleshooting">Type something</a>
                        </div>
                    </div>
                    <div className="collum">
                        <img width="281" height="180" src="public/img/collum3.png" />
                        <div className="text">
                            <h3>API</h3>
                            <p>Lorem ipsum dolor sit am, consectetur ipsum dolor.</p>
                            <a>Type something</a>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

        )
    }
}