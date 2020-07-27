import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

export default function Navbar() {
    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    });
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper container">
                    <Link to='/' className='brand-logo'>Wyatt Weisensel</Link>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to='/resume'>Resume</Link></li>
                        <li><a href="https://github.com/Genoe">My GitHub</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="slide-out">
                <li><Link to='/resume'>Resume</Link></li>
                <li><a href="https://github.com/Genoe">My GitHub</a></li>
            </ul>
        </React.Fragment>
    );
}
