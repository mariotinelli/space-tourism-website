import React from "react";
import CrewLayout from "../Layout";

import image from "/public/assets/crew/image-anousheh-ansari.png"

const occupation = "Flight Engineer";
const name = "Anousheh Ansari";
const description = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";


const Anousheh = () => (
    <>
        <CrewLayout 
            src={image}
            occupation={occupation}
            name={name}
            description={description}
        />
    </>
);

export default Anousheh;
