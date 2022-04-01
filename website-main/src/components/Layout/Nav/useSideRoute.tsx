import * as React from 'react';
import { useRouter } from 'next/router';
import {
  sidebarHome,
  sidebarBlog,
  sidebarInterview,
  sidebarAntS,
  sidebarAntSComponents,
  sidebarAntSOther,
} from 'constants/index';
import { docRouter, commonRouter } from 'routes';

function inferSection(
  pathname: string,
  type: SidebarNav
): CommonRouter | DocRouter {
  const router = type === 'docs' ? docRouter : commonRouter;
  if (pathname.startsWith(`/${router[2].path}`)) {
    return router[2].path;
  } else if (pathname.startsWith(`/${router[1].path}`)) {
    return router[1].path;
  } else {
    return router[0].path;
  }
}

export default function useRouteName(type: SidebarNav = 'root'): {
  routeNameMap: { path: DocRouter | CommonRouter; name: string }[];
  section: string;
  setSection: any;
  tree: any;
} {
  const routeNameMap = type === 'docs' ? docRouter : commonRouter;
  const firstSidebar = type === 'docs' ? sidebarAntS : sidebarHome;
  const secondSidebar = type === 'docs' ? sidebarAntSComponents : sidebarBlog;
  const thirdSidebar = type === 'docs' ? sidebarAntSOther : sidebarInterview;
  const { pathname } = useRouter();

  const [section, setSection] = React.useState(() =>
    inferSection(pathname, type)
  );

  let tree = null;
  switch (section) {
    case routeNameMap[0].path:
      tree = firstSidebar.routes[0];
      break;
    case routeNameMap[1].path:
      tree = secondSidebar.routes[0];
      break;
    case routeNameMap[2].path:
      tree = thirdSidebar.routes[0];
      break;
  }

  return {
    tree,
    routeNameMap,
    section,
    setSection,
  };
}
