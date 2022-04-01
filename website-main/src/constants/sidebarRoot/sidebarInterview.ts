const sidebarInterview = {
  title: '面试',
  heading: true,
  path: '/interview',
  routes: [
    {
      heading: true,
      path: '',
      routes: [
        {
          title: '网络方面',
          path: '/interview/internet',
        },
        {
          title: '前端工程',
          path: '/interview/frontend-engineering',
        },
        {
          title: 'JS基础',
          path: '/interview/javascript',
        },
        {
          title: '算法',
          path: '/interview/algorithm',
        },
      ],
    },
  ],
};

export default sidebarInterview;
