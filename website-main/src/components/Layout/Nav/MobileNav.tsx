import * as React from 'react';
import cn from 'classnames';
import { RouteItem } from 'components/Layout/useRouteMeta';
import { SidebarRouteTree } from '../Sidebar';
import useSideRoute from './useSideRoute';

export function MobileNav() {
  const { tree: trees, routeNameMap, section, setSection } = useSideRoute();
  let tree = trees;

  return (
    <>
      <div className="sticky top-0 px-5 mb-2 bg-wash dark:bg-wash-dark flex justify-end border-b border-border dark:border-border-dark items-center self-center w-full z-10">
        {routeNameMap.map((item) => (
          <TabButton
            key={item.name}
            isActive={section === item.name}
            onClick={() => setSection(item.name)}>
            {item.text}
          </TabButton>
        ))}
      </div>
      <SidebarRouteTree routeTree={tree as RouteItem} isMobile={true} />
    </>
  );
}

function TabButton({
  children,
  onClick,
  isActive,
}: {
  children: any;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isActive: boolean;
}) {
  const classes = cn(
    'inline-flex items-center w-full border-b-2 justify-center text-base leading-9 px-3 py-0.5 hover:text-link hover:gray-5',
    {
      'text-link dark:text-link-dark dark:border-link-dark border-link font-bold':
        isActive,
      'border-transparent': !isActive,
    }
  );
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
