import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BestFood from '../BestFood/BestFood';
import Busniess from '../Busniess/Busniess';
import Check from '../Check/Check';
import Contact from '../Contact/Contact';
import Discount from '../Discount/Discount';
import Food from '../Food/Food';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Check></Check>
            <Food></Food>
            <Services></Services>
            <BestFood></BestFood>
            <About></About>
            <Discount></Discount>
            <Busniess></Busniess>
            <Team></Team>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;