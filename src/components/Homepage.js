import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Homepage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 993);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 993);
        }, false);
    })

    let projectCardData = [
        {
            imgURL: './wordcomplete-logo.png',
            header: 'Word Complete',
            description: `Word Complete is a game where two players are matched up online and exchange words based on the
                        previous words ending letter. For example, Dog->Game->Earth->Have->Eat. Inspired by the Japanese "Shiritori" game. 
                        Made with Node, Express.js, Socket.IO, React, and Bootstrap.`,
            url: 'https://wordcompleteonline.com/'
        },
        {
            imgURL: './asiabazaar-logo.jpg',
            header: 'Asia Bazaar',
            description: `A "buy and sell" website I made for a client. People could email the owner and have an item with thier contact information listed.
                        The website owner would log in to manage all listings. Made with Node, Express.js, EJS templates, and Bootstrap.`,
        },
        {
            imgURL: './github-screenshot.jpg',
            header: 'My GitHub',
            description: `Check out my GitHub portfolio to see what I have been up to in the world of software development.
                        I enjoy learning about new things and writing code with the latest tools and frameworks.`,
            url: 'https://github.com/Genoe',
        },
        {
            imgURL: './code-screenshot.jpg',
            header: 'This Website!',
            description: `My personal website, which you are looking at right now! Made with React and the Materialize CSS library.`
        },
    ]

    let cards = projectCardData.map((value, index) => {
        return <ProjectCard 
                    imgURL={value.imgURL}
                    header={value.header}
                    description={value.description}
                    url={value.url}
                    key={index}
                    isMobile={isMobile}
                />
    });
    return (
        <div>
            <img src="/wyatt-banner.jpg" alt="Wyatt"></img>
            <h1 class="center-align">Hi, I'm Wyatt Weisensel</h1>
            <p class="center-align">
                A developer from Madison, Wisconsin. I enjoy creating web applications to save people time and money.
                I am a JavaScript expert and fullstack developer. When I'm not coding away at something cool, I enjoy
                farming (dairy farm kid). I also spent a year exploring Japan.
                Check out some of my projects listed below.
            </p>
            <div className="row">
                {cards}
            </div>
            
        </div>
    );
}
