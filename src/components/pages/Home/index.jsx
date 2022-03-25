import React from 'react'
import Explore from './Explore';
//import Header from './Header';
import Section from './Section';
import { HomeComponent } from './styled';

const Home = () => (

    <>
        <HomeComponent>
            {/*<Header />*/}
            <Section />
            <Explore />
        </HomeComponent>
    </>

)

export default Home;