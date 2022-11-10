import { RouteRecordRaw } from 'vue-router';

// layouts

// views for Admin layout

import Dashboard from '@/views/admin/Dashboard/Dashboard.vue';
import Settings from '@/views/admin/settings/Settings.vue';
import Tables from '@/views/admin/tables/Tables.vue';
import Maps from '@/views/admin/Maps.vue';

// views for Auth layout

import Login from '@/views/auth/login/Login.vue';
import Register from '@/views/auth/register/Register.vue';

// views without layouts

import Landing from '@/views/Landing.vue';
import Profile from '@/views/Profile.vue';
import Index from '@/views/Index.vue';
import Auth from '../layout/Auth.vue';
import Admin from '../layout/Admin.vue';
import Home from '../views/home/Home.vue';
import Sliders from "../views/admin/sliders/Sliders.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

export default routes;
