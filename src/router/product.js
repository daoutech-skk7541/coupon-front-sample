import ProductListView from "@/views/product/ProductListView.vue";
import AppDefault from "@/layouts/AppDefault.vue";

const productRoutes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/product-list',
                name: 'productList',
                component: ProductListView
            }
        ]
    }
]

export default productRoutes