import { MenuProvider } from 'components/useMenu';
import * as React from 'react';
import { Nav, DocNav } from './Nav';
import { RouteItem, SidebarContext } from './useRouteMeta';
import { Sidebar, DocSidebar } from './Sidebar';
import { Footer } from './Footer';
import { useMediaQuery } from './useMediaQuery';
import cn from 'classnames';

const SIDEBAR_BREAKPOINT = 1023;

interface PageProps {
  children: React.ReactNode;
  routeTree: RouteItem;
}

export function DocPage({ routeTree, children }: PageProps) {
  const isMobileSidebar = useMediaQuery(SIDEBAR_BREAKPOINT);

  return (
    <MenuProvider>
      <SidebarContext.Provider value={routeTree}>
        <div className="fixed  w-full z-50">
          <DocNav />
        </div>
        <div
          className={cn(
            !isMobileSidebar && 'pt-16',
            'h-auto lg:h-screen flex flex-row'
          )}>
          <div
            className={cn(
              !isMobileSidebar && 'pt-16',
              'no-bg-scrollbar h-auto lg:h-full lg:overflow-y-scroll fixed flex flex-row lg:flex-col py-0 top-0 left-0 right-0 lg:max-w-xs w-full shadow lg:shadow-none z-40'
            )}>
            <DocSidebar />
          </div>

          <div className="flex flex-1 w-full h-full self-stretch">
            <div className="w-full min-w-0">
              <main className="flex flex-1 self-stretch flex-col items-end justify-around">
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </SidebarContext.Provider>
    </MenuProvider>
  );
}

export function Page({ routeTree, children }: PageProps) {
  return (
    <MenuProvider>
      <SidebarContext.Provider value={routeTree}>
        <div className="h-auto lg:h-screen flex flex-row">
          <div className="no-bg-scrollbar h-auto lg:h-full lg:overflow-y-scroll fixed flex flex-row lg:flex-col py-0 top-0 left-0 right-0 lg:max-w-xs w-full shadow lg:shadow-none z-50">
            <Nav />
            <Sidebar />
          </div>

          <div className="flex flex-1 w-full h-full self-stretch">
            <div className="w-full min-w-0">
              <main className="flex flex-1 self-stretch flex-col items-end justify-around">
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </SidebarContext.Provider>
    </MenuProvider>
  );
}
