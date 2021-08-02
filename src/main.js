// register vue composition api globally
import 'vue-global-api'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import devalue from '@nuxt/devalue'
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'
import store from './store'
const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    let {app,initialState,router} = ctx
    app.use(store)
    if (import.meta.env.SSR) {
      initialState.state = store.state
    } else {
      //store.replaceState(initialState.store)
      initialState.store = store
    }
    router.beforeEach((to, from, next) => {
      // perform the (user-implemented) store action to fill the store's state
      if (!store.getters.ready)
          console.log(store.state);

      next()
    })
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.js')).map(i => i.install?.(ctx))
  },
  {
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state
    },
  },
)