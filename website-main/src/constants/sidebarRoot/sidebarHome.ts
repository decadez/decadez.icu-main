const sidebarHome = {
  title: '首页',
  heading: true,
  path: '/',
  routes: [
    {
      heading: true,
      path: '',
      routes: [
        {
          title: '个人概述',
          path: '/',
        },
        {
          title: '其它',
          path: '/other',
          routes: [
            {
              title: '感想',
              path: '/other/thinking',
            },
            {
              title: '加入开源',
              path: '/other/enter-open-source',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebarHome;