import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import data from '../assets/data'

const link = data.UserMenu.map((i: any) =>
  i.subFuns.map((p: any) =>
    p.subFuns
      ? p.subFuns.map((item: any) => ({
          path: `/${item.FuncId}`,
          name: item.FuncName,
          component: () => import(`../pages/${item.FuncId.slice(0, 2)}/${item.FuncId}.vue`)
        }))
      : {
          path: `/${p.FuncId}`,
          name: p.FuncName,
          component: () => import(`../pages/${p.FuncId.slice(0, 2)}/${p.FuncId}.vue`)
        }
  )
).flat(2)

const routes = [{ path: '/', name: 'Home', component: Home }, ...link]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
