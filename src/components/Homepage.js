import React from 'react';
import ProjectCard from './ProjectCard';

export default function Homepage() {
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
            description: `A "buy and sell" website I made as a request from a friend a few years ago. One of the first websites I made completely from
                        scratch. The idea was that people could email something they want listed. The website owner would log in to add and remove listings.
                        Made with Node, Express.js, EJS templates, and Bootstrap.`,
            url: 'https://wordcompleteonline.com/'
        }
    ]

    let cards = projectCardData.map((value) => {
        return <ProjectCard 
                    imgURL={value.imgURL}
                    header={value.header}
                    description={value.description}
                    url={value.url}
                />
    });
    return (
        <div>
            <img src="/technology-widescreen.jpg" alt="Wyatt"></img>
            <h1>Hi, I'm Wyatt Weisensel</h1>
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
