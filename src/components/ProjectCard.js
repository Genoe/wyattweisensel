import React from 'react';

export default function ProjectCard(props) {
    let {imgURL, header, description, url} = props;
    return (
        <div class="col l6">
            <h2 class="header">{header}</h2>
            <div class="card horizontal">
                <div class="card-image">
                    <img src={imgURL} alt={header}></img>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>
                        {description}
                    </p>
                    </div>
                    <div class="card-action">
                    <a href={url} target="_blank" rel='noreferrer noopener'>Check it out here!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
