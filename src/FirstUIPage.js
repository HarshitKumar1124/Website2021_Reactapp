import React from 'react';
import Header from './Component/Header/Header';
import ThreeDiv from './Component/Three-div-section/ThreeDiv.jsx';
import Service from './Component/ServiceSection/ServiceSection.jsx';
import Stats from './Component/Statistic/Statistic.jsx';
import Pricing from './Component/Pricing/Pricing.jsx';
import Footer from './Component/Footer/Footer.jsx';


const FirstUIPage = () => {
    return (
        <>
        <Header/>
        <ThreeDiv/>
        <Service/>
        <Stats/>
        <Pricing/>
        <Footer/>

        </>
    )
}

export default FirstUIPage;
