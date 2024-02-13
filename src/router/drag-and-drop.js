import AppDefault from "@/layouts/AppDefault.vue";
import DragAndDropView from "@/views/sample/DragAndDropView.vue";

const dragAndDropRoutes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/drag-and-drop',
                name: 'dragAndDrop',
                component: DragAndDropView
            }
        ]
    }
]

export default dragAndDropRoutes