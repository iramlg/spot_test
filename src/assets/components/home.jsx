import React from 'react';

export class Home extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    componentWillMount() {

    }

    render() {
        let s = this.state;

        return (
            <div className="">
                <ul className="header nav nav-justified">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Type something</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Type something</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Type something</a>
                            <a className="dropdown-item" href="#">Type something</a>
                            <a className="dropdown-item" href="#">Type something</a>
                            <a className="dropdown-item" href="#">Type something</a>
                            <a className="dropdown-item" href="#">Type something</a>
                            <a className="dropdown-item" href="#">Type something</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Type something</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Type something</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Type something</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Type something</a>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary">Type something</button>
                    </li>
                </ul>        


                <div className="footer">
                    <div className="row container-fluid">
                        <div className="col-2">
                            <a className="" href="#">Type something</a>
                        </div>
                        <div className="col-2">
                            <a className="" href="#">Type something</a>
                        </div>
                        <div className="col-2">
                            <a className="" href="#">Type something</a>
                        </div>
                        <div className="col-2">
                            <a className="" href="#">Type something</a>
                        </div>
                        <div className="col-4">
                            <a className="" href="#">Type something</a>
                        </div>
                    </div>
                </div>
                
                    
            </div>

        )
    }
}