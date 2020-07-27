import React from 'react';

export default function ProjectCard(props) {
    let {imgURL, header, description, url, isMobile} = props;
    return (
        <div className="col l6">
            <h4 className="header center-align">{header}</h4>
            <div className={`card ${!isMobile && 'horizontal'}`}>
                <div className="card-image">
                    <img src={imgURL} alt={header}></img>
                </div>
                <div className={`card-content ${!isMobile && 'card-stacked'}`}>
                    <p>{description}{url && <a href={url} target="_blank" rel='noreferrer noopener'> Check it out here!</a>}</p>
                </div>
            </div>
        </div>
    );
}
