import AppDefault from "@/layouts/AppDefault.vue";
import OrderView from "@/views/order/OrderView.vue";

const orderRoutes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/order',
                name: 'order',
                component: OrderView
            }
        ]
    }
]

export default orderRoutes