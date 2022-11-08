import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExtraPhoto from '../ExtraPhoto/ExtraPhoto';

const Home = () => {
    return (
        <div>
          <Banner />
          <Services />
          <ExtraPhoto />
          <Contact />
        </div>
    );
};

export default Home;