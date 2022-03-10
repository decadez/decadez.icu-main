export default {
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
          path: '/community',
          routes: [
            {
              title: 'Acknowledgements',
              path: '/community/acknowledgements',
            },
            {
              title: 'Meet the Team',
              path: '/community/meet-the-team',
            },
          ],
        },
      ],
    },
  ],
};
