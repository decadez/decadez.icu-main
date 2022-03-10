import * as React from 'react';
import NextLink from 'next/link';
import cn from 'classnames';
import { ExternalLink } from 'components/ExternalLink';
import { siteConfig, footerLinkMap } from 'constants/index';
import { repoUrl } from 'constants/index';

export function Footer() {
  return (
    <>
      <div className="self-stretch w-full sm:pl-0 lg:pl-80 sm:pr-0 2xl:pr-80 pl-0 pr-0">
        <div className="mx-auto w-full px-5 sm:px-12 md:px-12 pt-10 md:pt-12 lg:pt-10">
          <hr className="max-w-7xl mx-auto border-border dark:border-border-dark" />
        </div>
        <footer className="text-secondary dark:text-secondary-dark py-12 px-5 sm:px-12 md:px-12 sm:py-12 md:py-16 lg:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8 max-w-7xl mx-auto ">
            <ExternalLink
              href={repoUrl}
              className="col-span-2 sm:col-span-1 justify-items-start w-44 text-left">
              <div className="text-xs text-left mt-2 pr-0.5">
                {siteConfig.copyright}
              </div>
            </ExternalLink>
            {footerLinkMap.map((item) => (
              <div className="flex flex-col" key={item.title}>
                <FooterLink key={item.title} href={item.link} isHeader={true}>
                  {item.title}
                </FooterLink>
                {item.subTitles?.map((subItem, idx) => (
                  <FooterLink key={idx} href={subItem.link}>
                    {subItem.title}
                  </FooterLink>
                ))}
              </div>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}

function FooterLink({
  href,
  children,
  isHeader = false,
}: {
  href?: string;
  children: React.ReactNode;
  isHeader?: boolean;
}) {
  const classes = cn('border-b inline-block border-transparent', {
    'text-sm text-primary dark:text-primary-dark': !isHeader,
    'text-md text-secondary dark:text-secondary-dark my-2 font-bold': isHeader,
    'hover:border-gray-10': href,
  });

  if (!href) {
    return <div className={classes}>{children}</div>;
  }

  if (href.startsWith('https://')) {
    return (
      <div>
        <ExternalLink href={href} className={classes}>
          {children}
        </ExternalLink>
      </div>
    );
  }

  return (
    <div>
      <NextLink href={href}>
        <a className={classes}>{children}</a>
      </NextLink>
    </div>
  );
}
