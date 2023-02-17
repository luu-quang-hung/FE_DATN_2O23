// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'manager',
    title: 'management',
    type: 'group',
    children: [
        {
            id: 'util-product',
            title: 'Product',
            type: 'item',
            url: '/utils/util-product',
            breadcrumbs: false
        },
        {
            id: 'customer',
            title: 'Customer',
            type: 'item',
            url: '/utils/util-customer',
            breadcrumbs: false  
        },
        {
            id: 'util-personnel',
            title: 'Personnel',
            type: 'item',
            url: '/utils/util-personnel',
            breadcrumbs: false
        },
        {
            id: 'categories',
            title: 'Categories',
            type: 'collapse',
            children: [
                {
                    id: 'categories',
                    title: 'Categories LV1',
                    type: 'item',
                    url: '/categories/categories-lv1',
                    breadcrumbs: false
                },
                {
                    id: 'categories2',
                    title: 'Categories LV2',
                    type: 'item',
                    url: '/categories/categories-lv2',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
