import * as React from 'react';
import { MarkdownPage, MarkdownProps } from './MarkdownPage';
import { RouteItem } from 'components/Layout/useRouteMeta';
import { Page } from './Page';
import { sidebarInterview} from 'constants/index';
interface PageFrontmatter {
  title: string;
}

export default function withLearn(meta: PageFrontmatter) {
  function LayoutInterview(props: MarkdownProps<PageFrontmatter>) {
    return <MarkdownPage {...props} meta={meta} />;
  }
  LayoutInterview.appShell = AppShell;
  return LayoutInterview;
}

function AppShell(props: { children: React.ReactNode }) {
  return <Page {...props} routeTree={sidebarInterview as RouteItem} />;
}
