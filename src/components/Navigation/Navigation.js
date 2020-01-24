import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../routes';
import logo from '../../img/logo.png';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={`${s.nav} ${s.container}`}>
        <Link to={routes.HOME} className={s.logo__link}>
          <img src={logo} alt="logo" className={s.logo} width="200" />
        </Link>

        <ul className={s.navigation__list}>
          <li>
            <NavLink exact to={routes.HOME} className={s.navigation__link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.NEW_COLLECTION} className={s.navigation__link}>
              New Collection
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.MEN} className={s.navigation__link}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.WOMEN} className={s.navigation__link}>
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.KIDS} className={s.navigation__link}>
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.ABOUT} className={s.navigation__link}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.CONTACT_US} className={s.navigation__link}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.LOG_IN} className={s.navigation__link}>
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.SIGN_UP} className={s.navigation__link}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
