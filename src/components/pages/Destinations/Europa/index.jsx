import React from 'react'
import LayoutDestinations from '../Layout';
import background from "../../../../../public/assets/destination/background-destination-mobile.jpg"
import image from "../../../../../public/assets/destination/image-europa.png"

const name = "EUROPA";
const description = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
const distance = "628 MIL. KM";
const time = "3 YEARS";

const Europa = () => (

    <>        
        <LayoutDestinations 
            background={background}
            src={image}
            name={name}
            description={description}
            distance={distance}
            time={time}/>   
    </>   
    
)

export default Europa;