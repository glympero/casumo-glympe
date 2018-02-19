import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksDashboardPage from '../components/BooksDashboardPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
  
  
 const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={BooksDashboardPage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

  export default AppRouter;