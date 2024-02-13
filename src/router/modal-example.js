import AppDefault from "@/layouts/AppDefault.vue";
import ModalExampleView from "@/views/sample/ModalExampleView.vue";

const modalExampleView = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/modal-example',
                name: 'modalExample',
                component: ModalExampleView
            }
        ]
    }
]

export default modalExampleView;