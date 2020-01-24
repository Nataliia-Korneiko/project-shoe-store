import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

import s from './BestSellerSection.module.css';
import bestSeller01 from '../../img/best-seller/best-seller-01.jpg';
// import bestSeller05 from '../../img/best-seller/best-seller-05.jpg';

const BestSellerSection = () => {
  return (
    <>
      <section className={`${s.bestseller} ${s.container}`}>
        <h2 className={s.bestseller__title}>Men&#39;s New Releases</h2>
        <div className={s.bestseller__wrapper}>
          <img src={bestSeller01} alt="best seller" width="550" height="400" />
          <div>
            <h3 className={s.bestseller__description}>
              Whether you&#39;re a connoisseur of wet-weather wears, or just
              wanna keep your toes toasty in style, this fusion of the iconic
              Nike Air Force 1 and game-changing GORE-TEX material could be your
              go-to sneaker for many seasons to come.
            </h3>

            <Link to={routes.BEST_SELLER} className={s.bestseller__link}>
              View Now
            </Link>
          </div>
        </div>
      </section>

      {/* <section className={`${s.best__seller__women} ${s.container}`}>
          <h2 className={s.women__title}>Women&#39;s Tennis Shoes</h2>
          <div className={s.men__wrapper}>
            <img
              src={bestSeller05}
              alt="best seller"
              width="550"
              height="550"
            />
            <div>
              <h3 className={s.women__description}>
                Rule the court with speed and power when you lace up in Nike
                women’s tennis shoes. The Women&#39;s Training Shoe has a
                stronger heel than ever before, plus extra cushioning that hugs
                and contains your foot. The sole is still unbelievably flexible,
                offering a natural, lightweight feel and lateral support through
                every rep.
              </h3>

              <button className={s.view__now}>View Now</button>
            </div>
          </div>
        </section> */}
    </>
  );
};

export default BestSellerSection;
