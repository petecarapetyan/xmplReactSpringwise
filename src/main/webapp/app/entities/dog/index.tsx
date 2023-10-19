import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Dog from './dog';
import DogDetail from './dog-detail';
import DogUpdate from './dog-update';
import DogDeleteDialog from './dog-delete-dialog';

const DogRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Dog />} />
    <Route path="new" element={<DogUpdate />} />
    <Route path=":id">
      <Route index element={<DogDetail />} />
      <Route path="edit" element={<DogUpdate />} />
      <Route path="delete" element={<DogDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DogRoutes;
