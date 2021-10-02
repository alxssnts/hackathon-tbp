import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/crews">Crews</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ships">Ships</Link>
                </li>
                <li className="nav-item">
                    <Link to="/routes">Routes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/works">Works</Link>
                </li>
                <li className="nav-item">
                    <Link to="/duties">Duties</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
