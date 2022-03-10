import repoUrl from './repoUrl';
const issuesUrl = `${repoUrl}/issues/new?assignees=decadez&labels=demo&template=friend-link.md&title=Add+your+friend-link+to+my+site+https%3A%2F%2Fexample.com`;

export default [
  {
    title: '导航 ｜ navigation',
    link: '/',
    subTitles: [
      {
        title: '首页 ｜ home',
        link: '/',
      },
      {
        title: '博客 ｜ blog',
        link: '/blog',
      },
      {
        title: '面试 ｜ interview',
        link: '/interview',
      },
    ],
  },
  {
    title: '友情链接 ｜ friend link',
    link: '/',
    subTitles: [
      {
        title: '申请坑位 ｜ apply for',
        link: issuesUrl,
      },
      {
        title: '申请坑位 ｜ apply for',
        link: issuesUrl,
      },
      {
        title: '申请坑位 ｜ apply for',
        link: issuesUrl,
      },
    ],
  },
  {
    title: '联系方式 ｜ contact me',
    link: '/',
    subTitles: [
      {
        title: '邮箱 ｜ email',
        link: '/',
      },
      {
        title: '扣扣 ｜ qq',
        link: '/',
      },
      {
        title: '微信 ｜ wechat',
        link: '/',
      },
    ],
  },
];
