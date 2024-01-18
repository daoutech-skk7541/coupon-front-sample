import LoginView from "@/views/auth/LoginView.vue";
import AppDefault from "@/layouts/AppDefault.vue";

const authRoutes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/login',
                name: 'login',
                component: LoginView
            },
            {
                path: '/sign-up',
                name: 'signUp',
                component: () => import('@/views/auth/SignupView.vue') // 직접 import 할 수 있음
            },
            {
                path: '/logout',
                name: 'logout',
                redirect: '/'
            }
        ]
    }
]

export default authRoutes