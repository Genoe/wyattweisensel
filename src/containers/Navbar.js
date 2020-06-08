import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to='/' className='brand-logo'>Wyatt Weisensel</Link>
                <ul className="right">
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><a href="https://github.com/Genoe">My GitHub</a></li>
                </ul>
            </div>
        </nav>
    );
}
