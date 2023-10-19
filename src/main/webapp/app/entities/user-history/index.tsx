import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import UserHistory from './user-history';
import UserHistoryDetail from './user-history-detail';
import UserHistoryUpdate from './user-history-update';
import UserHistoryDeleteDialog from './user-history-delete-dialog';

const UserHistoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<UserHistory />} />
    <Route path="new" element={<UserHistoryUpdate />} />
    <Route path=":id">
      <Route index element={<UserHistoryDetail />} />
      <Route path="edit" element={<UserHistoryUpdate />} />
      <Route path="delete" element={<UserHistoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default UserHistoryRoutes;
