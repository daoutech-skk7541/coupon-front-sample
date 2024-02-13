import AppDefault from "@/layouts/AppDefault.vue";
import QuillEditorExampleView from "@/views/sample/QuillEditorExampleView.vue";

const quillEditorExample = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/quill-editor-example',
                name: 'quillEditorExample',
                component: QuillEditorExampleView
            }
        ]
    }
]

export default quillEditorExample