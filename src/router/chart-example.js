import AppDefault from "@/layouts/AppDefault.vue";
import ChartExampleView from "@/views/sample/ChartExampleView.vue";

const chartExampleRoutes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/chart-example',
                name: 'chartExample',
                component: ChartExampleView
            }
        ]
    }
]

export default chartExampleRoutes;