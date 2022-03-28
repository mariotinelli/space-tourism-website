import React from "react";
import CrewLayout from "../Layout";

import image from "/public/assets/crew/image-douglas-hurley.png"

const occupation = "COMMANDER";
const name = "DOUGLAS HURLEY";
const description = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";


const Douglas = () => (
    <>
        <CrewLayout 
            src={image}
            occupation={occupation}
            name={name}
            description={description}
        />
    </>
);

export default Douglas;
