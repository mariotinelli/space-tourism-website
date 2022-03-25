import React from 'react'
import LayoutDestinations from '../Layout';
import background from "/src/assets/destination/background-destination-mobile.jpg"
import image from "/src/assets/destination/image-mars.png"

const name = "MARS";
const description = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
const distance = "225 MIL. KM";
const time = "9 MONTHS";

const Mars = () => (

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

export default Mars;