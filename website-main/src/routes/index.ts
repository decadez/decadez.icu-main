const commonRouter: {
  name: string;
  path: CommonRouter;
}[] = [
  {
    name: '首页',
    path: 'home',
  },
  {
    name: '博客',
    path: 'blog',
  },
  { name: '面试', path: 'interview' },
];

const docRouter: {
  name: string;
  path: DocRouter;
}[] = [
  {
    name: 'Ant-S',
    path: 'ant-s',
  },
  {
    name: '组件',
    path: 'ant-s-components',
  },
  {
    name: '其它',
    path: 'ant-s-others',
  },
];

export { docRouter, commonRouter };
