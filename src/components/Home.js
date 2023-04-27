import React from 'react';
import bgHome3 from '../media/bgHome3.JPG';
import bgHome2 from '../media/bgHome2.JPG';

import submit from "../media/submit.svg";
import warranty from "../media/warranty.svg";
import card from "../media/card.svg";


const Home = () => {
    return (
        <main id='main-home'>
            <section id='section1-home'>
                <img src={bgHome3} alt="bag" />
                <img src={bgHome2} alt="bag" />



            </section>
            <section id='section2-home'>
                <div  id='div1-home'>
                    <img src={submit} alt="icon" />
                    <h2>ارسال رایگان </h2>
                </div>
                <div id='div2-home'>
                    <img src={warranty} alt="icon" />
                    <h2>ضمانت اصل بودن کالا </h2>
                </div>
                <div id='div3-home'>
                    <img src={card} alt="icon" />
                    <h2>امکان پرداخت در محل </h2>
                </div>
            </section>
        </main>
    );
};

export default Home;