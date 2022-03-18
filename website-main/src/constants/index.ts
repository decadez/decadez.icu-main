import sidebarInterview from './sidebarInterview';
import sidebarHome from './sidebarHome';
import sidebarBlog from './sidebarBlog';
import footerLinkMap from './footerLinkMap';
import repoUrl from './repoUrl';

const siteConfig = {
  editUrl: `${repoUrl}/website-main/src/pages`,
  copyright: `Copyright © ${new Date().getFullYear()} decadez. All Rights Reserved.`,
  repoUrl,
  algolia: {
    appId: 'QWGL1T9XAJ',
    apiKey: 'f91ab6952ef32a3bc0d96c27ee2ead09',
    indexName: 'new-index-1646441527',
  },
  headerIdConfig: {
    className: `anchor`,
  },
};

export {
  repoUrl,
  footerLinkMap,
  siteConfig,
  sidebarInterview,
  sidebarHome,
  sidebarBlog,
};
