import { createApp } from 'vue'
import { firestorePlugin } from 'vuefire';

import MainLayout from '@/layout/MainLayout/MainLayout.vue';
import Skeleton from '@/components/shared/SkeletonLoading/Skeleton.vue';
import DetailItem from '@/components/shared/Modals/DetailItem/DetailItem.vue';
import Toast from '@/components/shared/Toast/Toast.vue';
import App from './App.vue'

import './registerServiceWorker';

/* router */
import router from './router';

/* Css styles */
import './assets/styles/index.css';
import './assets/scss/styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/assets/styles/tailwind.css";

const app = createApp(App).use(router)

/* components */
app.component('skeleton', Skeleton);
app.component('main-layout', MainLayout);
app.component('detail-item', DetailItem);
app.component('toast', Toast);

/* plugins */
app.use(firestorePlugin);

app.mount('#app');