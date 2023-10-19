import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SpringProject from './spring-project';
import SpringProjectDetail from './spring-project-detail';
import SpringProjectUpdate from './spring-project-update';
import SpringProjectDeleteDialog from './spring-project-delete-dialog';

const SpringProjectRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SpringProject />} />
    <Route path="new" element={<SpringProjectUpdate />} />
    <Route path=":id">
      <Route index element={<SpringProjectDetail />} />
      <Route path="edit" element={<SpringProjectUpdate />} />
      <Route path="delete" element={<SpringProjectDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SpringProjectRoutes;
