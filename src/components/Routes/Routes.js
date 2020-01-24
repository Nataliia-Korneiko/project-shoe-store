import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import HomePage from '../../pages/HomePage/HomePage';
import BestSellerPage from '../../pages/BestSellerPage/BestSellerPage';
import NewCollectionPage from '../../pages/NewCollectionPage/NewCollectionPage';
import MenPage from '../../pages/MenPage/MenPage';
import WomenPage from '../../pages/WomenPage/WomenPage';
import KidsPage from '../../pages/KidsPage/KidsPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import LogInPage from '../../pages/LogInPage/LogInPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={routes.HOME} exact component={HomePage} />
        <Route path={routes.BEST_SELLER} component={BestSellerPage} />
        <Route path={routes.NEW_COLLECTION} component={NewCollectionPage} />
        <Route path={routes.MEN} component={MenPage} />
        <Route path={routes.WOMEN} component={WomenPage} />
        <Route path={routes.KIDS} component={KidsPage} />
        <Route path={routes.ABOUT} component={AboutPage} />
        <Route path={routes.CONTACT_US} component={ContactUsPage} />
        <Route path={routes.LOG_IN} component={LogInPage} />
        <Route path={routes.SIGN_UP} component={SignUpPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default Routes;
