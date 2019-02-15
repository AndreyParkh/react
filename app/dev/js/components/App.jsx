import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import history from '@app-history';

import Header from '@app-components/header/Header';
import Footer from '@app-components/footer/Footer';
import HomePage from '@app-components/Home';
import Dashboard from '@app-components/photographs/Dashboard';
import About from '@app-components/text-pages/About';
import SignInPage from '@app-components/auth/SignInPage';

import configureStore from '@app-store';

import * as routes from '@app-constants/routes';

const store = configureStore();

const App = () => {
  return <Provider store={store}>
    <Router history={history}>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path={routes.SIGN_IN} exact component={SignInPage} />
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.ABOUT} exact component={About} />
          <Route path={routes.DASHBOARD} exact component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
   </Provider>;
};

export default App;
