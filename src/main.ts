/*Vue-App /css*/
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/*Pinia */
import { createPinia } from 'pinia'

/*Router */
import router from './router';

/*PrimeVue*/
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'

/*App*/
const app = createApp(App)

/*Pinia */
const pinia = createPinia()

/*Router */
app.use(router);

/*Pinia */
app.use(pinia)

/*PrimeVue*/
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)

/*App*/
app.mount('#app')