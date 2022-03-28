import React from "react";

import TechnologyLayout from '../Layout'

import image from '/public/assets/technology/image-spaceport-landscape.jpg'

const name = 'SPACEPORT';
const description = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

const Spaceport = () => (
    <>
        <TechnologyLayout 
            src={image} 
            name={name}
            description={description}
        />

    </>
);

export default Spaceport;
