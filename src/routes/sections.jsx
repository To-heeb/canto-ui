import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const ProfilePage = lazy(() => import('src/pages/profile'));
export const BusinessesPage = lazy(() => import('src/pages/businesses'));
export const AddBusinessesPage = lazy(() => import('src/pages/add-business'));
export const BusinessTypesPage = lazy(() => import('src/pages/business-types'));
export const AdminPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ForgetPasswordPage = lazy(() => import('src/pages/forget-password'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'admins', element: <AdminPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'profile', element: <ProfilePage /> },
        {
          path: 'businesses',
          children: [
            { element: <BusinessesPage />, index: true },
            { path: 'new', element: <AddBusinessesPage /> },
            { path: ':business_id', element: <AdminPage /> },
          ]

        },
        { path: 'business-types', element: <BusinessTypesPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'logout',
      element: <LoginPage />,
    },
    {
      path: 'forget-password',
      element: <ForgetPasswordPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
