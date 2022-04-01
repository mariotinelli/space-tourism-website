import React from "react";

import TechnologyLayout from '../Layout'

import imageMobile from '/public/assets/technology/image-launch-vehicle-landscape.jpg'
import imageDesktop from '/public/assets/technology/image-launch-vehicle-portrait.jpg'

const name = 'launch vehicle';
const description = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

const Launch = () => (
    <>
        <TechnologyLayout 
            imageMobile={imageMobile}
            imageDesktop={imageDesktop}
            name={name}
            description={description}
        />

    </>
);

export default Launch;
