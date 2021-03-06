import cx from 'classnames';
import * as React from 'react';
import { useTocHighlight } from './useTocHighlight';

type SidebarNav = 'root' | 'docs';

export function Toc({
  headings,
  type = 'root',
}: {
  headings: Array<{
    title?: string;
    url: string;
    text: React.ReactNode;
    depth: number;
  }>;
  type?: SidebarNav;
}) {
  const { currentIndex } = useTocHighlight();
  // TODO: We currently have a mismatch between the headings in the document
  // and the headings we find in MarkdownPage (i.e. we don't find Recap or Challenges).
  // Select the max TOC item we have here for now, but remove this after the fix.
  const selectedIndex = Math.min(currentIndex, headings.length - 1);

  return (
    <nav
      role="navigation"
      className={cx('fixed top-0 right-0', type === 'docs' ? 'pt-16' : 'pt-6')}
      style={{
        // This keeps the layout fixed width instead of adjusting for content.
        width: 'inherit',
        maxWidth: 'inherit',
      }}>
      <h2 className="mb-3 lg:mb-3 uppercase tracking-wide font-bold text-sm text-secondary dark:text-secondary-dark px-4 w-full">
        {headings[0].title}
      </h2>
      <div className="toc h-full overflow-y-auto pl-4">
        <ul className="space-y-2 pb-16">
          {headings &&
            headings.length > 0 &&
            headings.map((h, i) => {
              if (h.url == null) {
                // TODO: only log in DEV
                console.error('Heading does not have URL');
              }
              return (
                <li
                  key={`heading-${h.url}-${i}`}
                  className={cx(
                    'text-sm px-2 rounded-l-lg',
                    selectedIndex === i
                      ? 'bg-highlight dark:bg-highlight-dark'
                      : null,
                    {
                      'pl-4': h?.depth === 3,
                      hidden: h.depth && h.depth > 3,
                    }
                  )}>
                  <a
                    className={cx(
                      selectedIndex === i
                        ? 'text-link dark:text-link-dark font-bold'
                        : 'text-secondary dark:text-secondary-dark',
                      'block hover:text-link dark:hover:text-link-dark leading-normal py-2'
                    )}
                    href={h.url}>
                    {h.text}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
      <style jsx global>{`
        .toc {
          /** Screen - nav - toc offset */
          max-height: calc(100vh - 7.5rem);
        }
        .toc-link > code {
          overflow-wrap: break-word;
          white-space: pre-wrap;
          font-size: 90%;
        }
      `}</style>
    </nav>
  );
}
