import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Frog from './frog';
import FrogDetail from './frog-detail';
import FrogUpdate from './frog-update';
import FrogDeleteDialog from './frog-delete-dialog';

const FrogRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Frog />} />
    <Route path="new" element={<FrogUpdate />} />
    <Route path=":id">
      <Route index element={<FrogDetail />} />
      <Route path="edit" element={<FrogUpdate />} />
      <Route path="delete" element={<FrogDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FrogRoutes;
