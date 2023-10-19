import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CodingCategory from './coding-category';
import CodingCategoryDetail from './coding-category-detail';
import CodingCategoryUpdate from './coding-category-update';
import CodingCategoryDeleteDialog from './coding-category-delete-dialog';

const CodingCategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CodingCategory />} />
    <Route path="new" element={<CodingCategoryUpdate />} />
    <Route path=":id">
      <Route index element={<CodingCategoryDetail />} />
      <Route path="edit" element={<CodingCategoryUpdate />} />
      <Route path="delete" element={<CodingCategoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CodingCategoryRoutes;
