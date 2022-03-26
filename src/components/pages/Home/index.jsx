import React from 'react'
import Explore from './Explore';
//import Header from './Header';
import Section from './Section';
import { HomeComponent } from './styled';
import background from '../../../../public/assets/home/background-home-mobile.jpg'

const Home = () => (

    <>
        <HomeComponent background={background}>
            {/*<Header />*/}
            <Section />
            <Explore />
        </HomeComponent>
    </>

)

export default Home;