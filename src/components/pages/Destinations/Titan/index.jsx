import React from 'react'
import LayoutDestinations from '../Layout';
import background from "/src/assets/destination/background-destination-mobile.jpg"
import image from "/src/assets/destination/image-titan.png"

const name = "TITAN";
const description = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
const distance = "1.6 BIL. KM";
const time = "7 YEARS";

const Titan = () => (

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

export default Titan;