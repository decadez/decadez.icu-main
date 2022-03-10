import * as React from 'react';
import { useRouter } from 'next/router';
import { sidebarHome, sidebarBlog, sidebarInterview } from 'constants/index';

function inferSection(pathname: string): 'interview' | 'blog' | 'home' {
  if (pathname.startsWith('/interview')) {
    return 'interview';
  } else if (pathname.startsWith('/blog')) {
    return 'blog';
  } else {
    return 'home';
  }
}

const routeNameMap = [
  {
    name: 'home',
    text: '首页',
  },
  {
    name: 'blog',
    text: '博客',
  },
  { name: 'interview', text: '面试' },
];

export default function useRouteName(): {
  routeNameMap: any[];
  section: string;
  setSection: any;
  tree: any;
} {
  const { pathname } = useRouter();
  const [section, setSection] = React.useState(() => inferSection(pathname));

  let tree = null;
  switch (section) {
    case 'home':
      tree = sidebarHome.routes[0];
      break;
    case 'blog':
      tree = sidebarBlog.routes[0];
      break;
    case 'interview':
      tree = sidebarInterview.routes[0];
      break;
  }

  return {
    tree,
    routeNameMap,
    section,
    setSection,
  };
}
