import React from "react";
import CrewLayout from "../Layout";

import image from "/public/assets/crew/image-victor-glover.png"

const occupation = "PILOT";
const name = "Victor Glover";
const description = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";


const Victor = () => (
    <>
        <CrewLayout 
            src={image}
            occupation={occupation}
            name={name}
            description={description}
            maxWidth="37rem"
        />
    </>
);

export default Victor;
