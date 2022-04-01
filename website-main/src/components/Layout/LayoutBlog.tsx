import * as React from 'react';
import { sidebarBlog } from 'constants/index';
import { MarkdownPage, MarkdownProps } from './MarkdownPage';
import { Page } from './Page';
import { RouteItem } from './useRouteMeta';

interface PageFrontmatter {
  title: string;
  status: string;
}

export default function withAPI(p: PageFrontmatter) {
  function LayoutBlog(props: MarkdownProps<PageFrontmatter>) {
    return <MarkdownPage {...props} meta={p} />;
  }
  LayoutBlog.appShell = AppShell;
  return LayoutBlog;
}

function AppShell(props: { children: React.ReactNode }) {
  return <Page routeTree={sidebarBlog as RouteItem} {...props} />;
}
