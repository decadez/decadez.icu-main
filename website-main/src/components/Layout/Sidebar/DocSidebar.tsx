import * as React from 'react';
import cn from 'classnames';
import { SidebarContext } from 'components/Layout/useRouteMeta';
import { MenuContext } from 'components/useMenu';
import { useMediaQuery } from '../useMediaQuery';
import { SidebarRouteTree } from './SidebarRouteTree';
import { MobileNav } from '../Nav/MobileNav';
import { Feedback } from '../Feedback';

const SIDEBAR_BREAKPOINT = 1023;

export function DocSidebar({ isMobileOnly }: { isMobileOnly?: boolean }) {
  const { menuRef, isOpen } = React.useContext(MenuContext);
  const isMobileSidebar = useMediaQuery(SIDEBAR_BREAKPOINT);
  let routeTree = React.useContext(SidebarContext);

  const isHidden = isMobileSidebar ? !isOpen : false;
  const [isFeedBackShow, setIsFeedBackShow] = React.useState(false);
  const feedBackEndRef = React.useRef<any>();

  React.useEffect(() => {
    if (!window.localStorage.getItem('handled')) {
      setIsFeedBackShow(true);
    }
    return () => {
      clearTimeout(feedBackEndRef.current);
    };
  }, []);
  // HACK. Fix up the data structures instead.
  if ((routeTree as any).routes.length === 1) {
    routeTree = (routeTree as any).routes[0];
  }
  return (
    <aside
      className={cn(
        `lg:flex-grow lg:flex flex-col w-full pb-8 lg:pb-0 lg:max-w-xs fixed lg:sticky bg-wash dark:bg-wash-dark z-10 top-0`,
        isOpen ? 'block z-40' : 'hidden lg:block',
        isMobileSidebar && 'pt-12'
      )}
      aria-hidden={isHidden}>
      <nav
        role="navigation"
        ref={menuRef}
        style={{ '--bg-opacity': '.2' } as React.CSSProperties} // Need to cast here because CSS vars aren't considered valid in TS types (cuz they could be anything)
        className="w-full h-screen lg:h-auto flex-grow pr-0 lg:pr-5 pt-6 pb-44 lg:pb-0 lg:py-6 md:pt-4 lg:pt-4 overflow-y-scroll lg:overflow-y-auto scrolling-touch scrolling-gpu">
        {isMobileSidebar ? (
          <MobileNav type="docs" />
        ) : (
          <SidebarRouteTree routeTree={routeTree} />
        )}
      </nav>
      <div className="sticky bottom-0 hidden lg:block">
        {isFeedBackShow && (
          <Feedback
            onSubmit={() => {
              feedBackEndRef.current = setTimeout(() => {
                setIsFeedBackShow(false);
                window.localStorage.setItem('handled', 'true');
              }, 2000);
            }}
          />
        )}
      </div>
    </aside>
  );
}
