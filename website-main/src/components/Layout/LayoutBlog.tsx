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
  function LayoutTags(props: MarkdownProps<PageFrontmatter>) {
    return <MarkdownPage {...props} meta={p} />;
  }
  LayoutTags.appShell = AppShell;
  return LayoutTags;
}

function AppShell(props: { children: React.ReactNode }) {
  return <Page routeTree={sidebarBlog as RouteItem} {...props} />;
}
