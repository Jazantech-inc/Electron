import React from 'react';
import '@splidejs/react-splide/css'
import Shop from '../component/Home/Shop';
import Offer from '../component/Service/Offer';
import Experince from '../component/Service/Experince';
import OurElectritions from '../component/Service/OurElectritions';
import OurTeam from '../component/Service/OurTeam';
import OurRates from '../component/Service/OurRates';
import OurWorkers from '../component/Service/OurWorkers';

const Services = () => {
  return (
    <div>
      <Experince />
      <Offer />
      <Shop />
      <OurRates />
      <OurTeam />
      <OurWorkers/>
      <OurElectritions />
    </div>
  );
}

export default Services;
