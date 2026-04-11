import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import BlogList from '../views/BlogList.vue';
import BlogPost from '../views/BlogPost.vue';
import UserProfile from '../views/profile/UserProfile.vue';
import UserProfileInfo from '../views/profile/UserProfileInfo.vue';
import UserProfileSettings from '../views/profile/UserProfileSettings.vue';
// import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Overview from '../views/dashboard/Overview.vue'
// const isAuthenticated = false;

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/blog', name: 'BlogList', component: BlogList },
    { path: '/blog/:id', name: 'BlogPost', component: BlogPost },

    // { path: '/login', name: 'Login', component: Login },

    {
        path: '/profile/:userId',
        name: 'UserProfile',
        component: UserProfile,
        alias: '/me',
        // meta: { requiresAuth: true },
        children: [
            { path: 'info', name: 'UserProfileInfo', component: UserProfileInfo },
            { path: 'settings', name: 'UserProfileSettings', component: UserProfileSettings }
        ]
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
        children: [{
            path: 'overview',
            name: 'DashboardOverview',
            component: Overview
        }]
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
            import ('../views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     if (requiresAuth && !isAuthenticated) {
//         alert("Bạn cần đăng nhập để xem thông tin này!");
//         next({ name: 'Login' });
//     } else {
//         next();
//     }
// });

export default router;