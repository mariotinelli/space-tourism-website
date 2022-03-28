import React from "react";

import TechnologyLayout from '../Layout'

import image from '/public/assets/technology/image-space-capsule-landscape.jpg'

const name = 'SPACE CAPSULE';
const description = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

const SpaceCapsule = () => (
    <>
        <TechnologyLayout 
            src={image} 
            name={name}
            description={description}
        />

    </>
);

export default SpaceCapsule;
