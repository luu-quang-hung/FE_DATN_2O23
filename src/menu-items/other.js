// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'payment-management',
            title: 'Electronic wallet',
            type: 'item',
            url: '/payment-management',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
    
    ]
};

export default other;
