import AppDefault from "@/layouts/AppDefault.vue";
import OrganizationView from "@/views/organization/OrganizationView.vue";

const organizationRoutes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/organization',
                name: 'organization',
                component: OrganizationView
            }
        ]
    }
]

export default organizationRoutes