import * as React from 'react';
import { MarkdownPage, MarkdownProps } from './MarkdownPage';
import {
  sidebarAntS,
  sidebarAntSComponents,
  sidebarAntSOther,
} from 'constants/index';
import { DocPage } from './Page';
import { RouteItem } from './useRouteMeta';
import { useRouter } from 'next/router';

interface PageFrontmatter {
  title: string;
  status: string;
}

export default function withAPI(p: PageFrontmatter) {
  function LayoutAntS(props: MarkdownProps<PageFrontmatter>) {
    return <MarkdownPage {...props} type="docs" meta={p} />;
  }
  LayoutAntS.appShell = AppShell;
  return LayoutAntS;
}

function AppShell(props: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  const antSComponentsReg = /(\/ant-s-components)/gi;
  const antSOtherReg = /(\/ant-s-others)/gi;
  const routeItem = antSComponentsReg.test(pathname)
    ? sidebarAntSComponents
    : antSOtherReg.test(pathname)
    ? sidebarAntSOther
    : sidebarAntS;

  return <DocPage routeTree={routeItem as RouteItem} {...props} />;
}
