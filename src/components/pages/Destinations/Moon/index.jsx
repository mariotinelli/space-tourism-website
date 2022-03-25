import React from 'react'
import LayoutDestinations from '../Layout';
import background from "../../../../../public/assets/destination/background-destination-mobile.jpg"
import moon from "../../../../../public/assets/destination/image-moon.png"

const description = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
const distance = "384,400 KM";
const time = "3 DAYS";

const Moon = () => (

    <>        
        <LayoutDestinations 
            background={background}
            src={moon}
            name="MOON"
            description={description}
            distance={distance}
            time={time}/>   
    </>   
    
)

export default Moon;