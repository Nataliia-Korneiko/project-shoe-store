import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={`${s.footer__wrapper} ${s.container}`}>
          <div className={s.about}>
            <h2 className={s.about__title}>About Sneakers</h2>
            <p className={s.about__description}>
              With the trust we have built with all of you over the years it is
              with great pleasure to serve you as a source for supplying you the
              latest sneakers. We hope to give our customers the greatest buying
              experience that any site can deliver. We look forward to serving
              you with delivering the hottest shoes, with the fastest delivery,
              and the best customer service.
            </p>
          </div>
          <div className={s.info__wrapper}>
            <div className={s.contact}>
              <h2 className={s.contact__title}>Contact Info</h2>
              <p className={s.contact__address}>
                00532, 19th Street, San Francisco, CA 97210, United States of
                America
              </p>
              <p className={s.contact__phones}>+ 1 315-250-6788</p>
              {/* <p className={s.contact__time}>We are open: Mn-Fr: 10AM - 8PM</p> */}
              <p className={s.contact__email}>info@sneakers.org</p>
            </div>

            <div className={s.form__wrapper}>
              <h2 className={s.form__title}>Newsletter</h2>
              <p className={s.form__about}>
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
              <form className={s.form}>
                <input
                  className={s.form__input}
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail address &#42;"
                  required
                />
                <button className={s.form__button} type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <nav className={`${s.nav} ${s.container}`}>
          <ul className={s.navigation__list}>
            <li className={s.navigation__item}>
              <NavLink exact to={routes.HOME} className={s.navigation__link}>
                Home
              </NavLink>
            </li>
            <li className={s.navigation__item}>
              <NavLink
                to={routes.NEW_COLLECTION}
                className={s.navigation__link}
              >
                New Collection
              </NavLink>
            </li>
            <li className={s.navigation__item}>
              <NavLink to={routes.MEN} className={s.navigation__link}>
                Men
              </NavLink>
            </li>
            <li className={s.navigation__item}>
              <NavLink to={routes.WOMEN} className={s.navigation__link}>
                Women
              </NavLink>
            </li>
            <li className={s.navigation__item}>
              <NavLink to={routes.KIDS} className={s.navigation__link}>
                Kids
              </NavLink>
            </li>
            <li className={s.navigation__item}>
              <NavLink to={routes.ABOUT} className={s.navigation__link}>
                About
              </NavLink>
            </li>
            <li className={s.navigation__item}>
              <NavLink to={routes.CONTACT_US} className={s.navigation__link}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <p className={s.nav__title}>
            Copyright &#169; 2019. All Right Reserved. Sneakers.
          </p>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
