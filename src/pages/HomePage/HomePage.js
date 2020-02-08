import React from 'react';
import Slider from '../../components/Slider/Slider';
import BestSellerSection from '../../components/BestSellerSection/BestSellerSection';
import Video from '../../components/Video/Video';

const HomePage = () => {
  return (
    <>
      <main>
        <Slider />
        <BestSellerSection />
        <Video />
      </main>
    </>
  );
};

export default HomePage;
