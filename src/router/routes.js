export default [
  {
    path: '/',
    component: resolve => require(['@/pages/tabbar'], resolve),
    children: [
      {
        path: 'my',
        component: resolve => require(['../pages/my/my'], resolve),
      },  {
        path: 'mining',
        component: resolve => require(['@/pages/mining/mining'], resolve)
      },
    ]
  }, {
    path: '/login',
    component: resolve => require(['@/pages/login'], resolve)
  },{
    path:'/about',
    component:resolve => require(['../pages/my/about'], resolve),
  }
]
