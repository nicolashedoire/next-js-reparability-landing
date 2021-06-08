import React, { FC } from "react";

import clsx from "clsx";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

const NavLink: FC<NavLinkProps> = ({
  href,
  active,
  children,
  className,
  isExternal,
}) => {
  const Component = isExternal ? React.Fragment : Link;

  return (
    <Component {...((isExternal ? {} : { href }) as { href: string })}>
      <a
        className={clsx(
          "py-5 sm:py-7 text-blue-deep px-3 text-sm font-bold border-b-2 border-white hover:underline nav:hover:no-underline nav:hover:border-blue-deep",
          {
            "nav:border-blue-deep": active,
          },
          className
        )}
        {...(isExternal ? { href } : {})}
      >
        {active && <span className="mr-2 nav:hidden">&rarr;</span>}
        {children}
        {active && <span className="ml-2 nav:hidden">&larr;</span>}
      </a>
    </Component>
  );
};

export default NavLink;
