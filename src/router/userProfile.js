import AppDefault from "@/layouts/AppDefault.vue";
import MyPageView from "@/views/profile/MyPageView.vue";
import {useAuthStore} from "@/stores/auth.js";

const userProfileRoutes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/my-page',
                name: 'myPage',
                component: MyPageView,
                beforeEnter: (to, from, next) => {
                    if (!useAuthStore().isLoggedIn) {
                        if (to.name !== 'login') {
                            useAuthStore().destinationPath = to.fullPath
                            next({name: 'login'})
                        }
                    } else {
                        next()
                    }
                }
            },
        ]
    }
]

export default userProfileRoutes