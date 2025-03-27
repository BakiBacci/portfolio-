import { createRouter, createWebHistory } from 'vue-router'; // Importez les fonctions de Vue Router 4

import Contact from '@/views/Contact.vue';
import ProjetWeb from '@/views/ProjetWeb.vue';


// Créez le routeur
const router = createRouter({
    history: createWebHistory(), // Utilise le mode d'historique HTML5
    routes: [
        { path: '/', component: ProjetWeb, name: 'Accueil' },
        { path: '/contact', component: Contact, name: 'contact' },
    ],
});

export default router; // Exportez le routeur