import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Modulos',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                type     : 'item',
                icon     : 'dashboard', //vertical_split view_quilt dashboard insert_chart
                url      : '/dashboard'
            },
            {
                id       : 'logistic-transportation',
                title    : 'Logistic and Transportation',
                type     : 'item',
                icon     : 'local_shipping',
                url      : '/logistic-transportation'
            },
            {
                id       : 'security-alarms-panic-buttons',
                title    : 'Security Alarms & Panic Buttons',
                type     : 'item',
                icon     : 'notifications_active',
                url      : '/security-alarms-panic-buttons'
            },
            {
                id       : 'vehicle-tracking-system',
                title    : 'Vehicle Tracking System',
                type     : 'item',
                icon     : 'location_on',
                url      : '/vehicle-tracking-system'
            },
            {
                id       : 'emergency-employee-number',
                title    : 'Emergency Employee Number',
                type     : 'item',
                icon     : 'perm_phone_msg',
                url      : '/emergency-employee-number'
            },
            {
                id       : 'incidents-management-alerts',
                title    : 'Incidents & Management Alerts',
                type     : 'item',
                icon     : 'phonelink_ring', //add_to_home_screen device_unknown notification_important mobile_screen_share
                url      : '/incidents-management-alerts'
            }
        ]
    }
];
