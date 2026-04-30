import type { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
        component: () => import('../layouts/MainLayout.vue'),
        children: [

            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('../pages/estoque/DashboardEstoque.vue'),
            },
            {
                path: 'estoque',
                name: 'estoque',
                component: () => import('../pages/EstoqueViewer.vue'),
                meta: { title: 'Estoque' },
                children: [
                    {
                        path: '',
                        redirect: '/estoque/cadastro',
                    },
                    {
                        path: 'cadastro',
                        name: 'cadastro',
                        component: () => import('../pages/estoque/CadastroEstoque.vue'),
                    },
                    {
                        path: 'sla',
                        name: 'sla',
                        component: () => import('../pages/estoque/CadastroEstoque.vue'),
                    },
                ],
            },
        ],
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('../pages/ErrorNotFound.vue'),
    },
];

export default routes;