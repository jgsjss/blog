import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
const routes = [
  {
    path: "/detail/:id(\\d+)",  //(\\d+) 숫자만 받도록 하는 정규식
    component: Detail,
    children: [
      {
        path: "/author",
        component: Author.vue,
      },
      {
        path: "/comment",
        component: Comment.vue,
      },
    ]
  },
  {
    path: "/list",
    component: List,
  },
  {
      path: "/",
      component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 