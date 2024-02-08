import AppDefault from "@/layouts/AppDefault.vue";
import GcpView from "@/views/gcp/GcpView.vue";

const gcpRoutes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/gcp',
                name: 'gcp',
                component: GcpView
            }
        ]
    }
]

export default gcpRoutes