import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Student from './student';
import Airplane from './airplane';
import Car from './car';
import Truck from './truck';
import CodingCategory from './coding-category';
import Dog from './dog';
import Frog from './frog';
import Movie from './movie';
import SpringProject from './spring-project';
import UserHistory from './user-history';
import Ticket from './ticket';
import ScoreType from './score-type';
import Score from './score';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="student/*" element={<Student />} />
        <Route path="airplane/*" element={<Airplane />} />
        <Route path="car/*" element={<Car />} />
        <Route path="truck/*" element={<Truck />} />
        <Route path="coding-category/*" element={<CodingCategory />} />
        <Route path="dog/*" element={<Dog />} />
        <Route path="frog/*" element={<Frog />} />
        <Route path="movie/*" element={<Movie />} />
        <Route path="spring-project/*" element={<SpringProject />} />
        <Route path="user-history/*" element={<UserHistory />} />
        <Route path="ticket/*" element={<Ticket />} />
        <Route path="score-type/*" element={<ScoreType />} />
        <Route path="score/*" element={<Score />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
