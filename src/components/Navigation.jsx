import Link from 'next/link'
import clsx from 'clsx'

function TopLevelNavItem({ href, children, target, rel }) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, active, isAnchorLink = false, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      )}
    >
      <span className="truncate">{children}</span>
    </Link>
  )
}

export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem
          href="#"
        >
          Hello. I&apos;'m CraveChef, your personal AI chef to generate a wide variety of recipes which you can make with only using ingredients which you have! {'\n'}
        </TopLevelNavItem>
      </ul>
       <ul role="list">
        <TopLevelNavItem
          href="https://instagram.com/a1mightynan"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Instagram
        </TopLevelNavItem>
      </ul>
      <ul role="list">
        <TopLevelNavItem
          href="https://github.com/almightynan"
          target="_blank"
          rel="noopener noreferrer"
        >
          - GitHub
        </TopLevelNavItem>
      </ul>
      <ul role="list">
        <TopLevelNavItem
          href="https://twitter.com/almightynan"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Twitter
        </TopLevelNavItem>
      </ul>
    </nav>
  )
}
