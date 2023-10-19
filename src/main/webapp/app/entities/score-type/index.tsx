import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ScoreType from './score-type';
import ScoreTypeDetail from './score-type-detail';
import ScoreTypeUpdate from './score-type-update';
import ScoreTypeDeleteDialog from './score-type-delete-dialog';

const ScoreTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ScoreType />} />
    <Route path="new" element={<ScoreTypeUpdate />} />
    <Route path=":id">
      <Route index element={<ScoreTypeDetail />} />
      <Route path="edit" element={<ScoreTypeUpdate />} />
      <Route path="delete" element={<ScoreTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ScoreTypeRoutes;
