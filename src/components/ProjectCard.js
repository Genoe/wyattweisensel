import React from 'react';

export default function ProjectCard(props) {
    let {imgURL, header, description, url, isMobile} = props;
    return (
        <div class="col l6">
            <h4 class="header center-align">{header}</h4>
            <div class={`card ${!isMobile && 'horizontal'}`}>
                <div class="card-image">
                    <img src={imgURL} alt={header}></img>
                </div>
                <div class={`card-content ${!isMobile && 'card-stacked'}`}>
                    <p>{description}{url && <a href={url} target="_blank" rel='noreferrer noopener'> Check it out here!</a>}</p>
                </div>
            </div>
        </div>
    );
}
