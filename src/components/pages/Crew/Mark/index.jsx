import React from "react";
import CrewLayout from "../Layout";

import image from "/public/assets/crew/image-mark-shuttleworth.png"

const occupation = "Mission Specialist ";
const name = "MARK SHUTTLEWORTH";
const description = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";


const Mark = () => (
    <>
        <CrewLayout 
            src={image}
            occupation={occupation}
            name={name}
            description={description}
        />
    </>
);

export default Mark;
