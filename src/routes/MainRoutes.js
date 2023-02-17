import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsProduct = Loadable(lazy(() => import('views/utilities/Product')));
const UtilsCustomer
 = Loadable(lazy(() => import('views/utilities/Customer')));
const UtilsPersonnel = Loadable(lazy(() => import('views/utilities/Personnel')));
const UtilsCateLv2 = Loadable(lazy(() => import('views/utilities/CategoriesLv2')));
const UtilsCateLv1 = Loadable(lazy(() => import('views/utilities/CategoriesLv1')));

// sample page routing
const Payment = Loadable(lazy(() => import('views/payment')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-Product',
                    element: <UtilsProduct />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-customer',
                    element: <UtilsCustomer
                     />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-personnel',
                    element: <UtilsPersonnel />
                }
            ]
        },
        {
            path: 'categories',
            children: [
                {
                    path: 'categories-lv1',
                    element: <UtilsCateLv1/>
                }
            ]
        },
        {
            path: 'categories',
            children: [
                {
                    path: 'categories-lv2',
                    element: <UtilsCateLv2 />
                }
            ]
        },
        {
            path: 'payment-management',
            element: <Payment />
        }
    ]
};

export default MainRoutes;
