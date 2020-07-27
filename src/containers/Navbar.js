import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import M from 'materialize-css';

export default function Navbar() {
    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    });
    const listItems = <React.Fragment>
            <li><Link to='/resume' target="_blank" rel='noreferrer noopener'>Resume</Link></li>
            <li><a href="https://github.com/Genoe" target="_blank" rel='noreferrer noopener'>My GitHub</a></li>
        </React.Fragment>;
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper container">
                    <Link to='/' className='brand-logo'>Wyatt Weisensel</Link>
                    <button data-target="slide-out" className="sidenav-trigger link-button hide-on-large-only"><i className="material-icons menu-icon">menu</i></button>
                    <ul className="right hide-on-med-and-down">
                        {listItems}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="slide-out">
                {listItems}
            </ul>
        </React.Fragment>
    );
}
