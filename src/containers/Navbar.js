import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import M from 'materialize-css';

export default function Navbar() {
    const slideOutRef = useRef(null);

    useEffect(() => {
        let sidenav = slideOutRef.current;
        M.Sidenav.init(sidenav, {});
    });
    const listItems = <React.Fragment>
            <li><Link to='/wyatt-weisensel-resume.pdf' target="_blank" rel='noreferrer noopener'>Resume</Link></li>
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
            <ul className="sidenav" id="slide-out" ref={slideOutRef}>
                {listItems}
            </ul>
        </React.Fragment>
    );
}
