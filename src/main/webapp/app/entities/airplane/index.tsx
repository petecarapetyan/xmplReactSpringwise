import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Airplane from './airplane';
import AirplaneDetail from './airplane-detail';
import AirplaneUpdate from './airplane-update';
import AirplaneDeleteDialog from './airplane-delete-dialog';

const AirplaneRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Airplane />} />
    <Route path="new" element={<AirplaneUpdate />} />
    <Route path=":id">
      <Route index element={<AirplaneDetail />} />
      <Route path="edit" element={<AirplaneUpdate />} />
      <Route path="delete" element={<AirplaneDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AirplaneRoutes;
