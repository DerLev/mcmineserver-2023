import Link from 'next/link'
import tw from 'twin.macro'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { cx, css } from '@emotion/css'

interface NavProps {
  pathname: string
}

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'Hosting', href: '/hosting' },
  { text: 'Discord', href: '/discord' },
]

const styles = {
  nav: ({ pathname }: { pathname: string }) => [
    tw`top-0 left-0 right-0 md:(h-12 px-16) [height: 4rem] px-6 py-2 [z-index: 1000] text-xl font-display`,
    tw`flex gap-2 md:justify-between items-center border-b border-gray-800 backdrop-blur-sm bg-gray-800/30`,
    pathname !== '/' ? tw`sticky` : tw`fixed`
  ],
  hoverButton: [
    tw`rounded-lg border border-transparent transition`,
    tw`canhover:hover:(text-white border-gray-700 bg-gray-900/70)`
  ],
  title: tw`px-2 py-1 text-2xl font-bold`,
  links: tw`md:flex hidden gap-4`,
  linksItem: tw`py-1 px-2`,
  mobileNavButton: tw`p-2 text-2xl md:hidden`,
  mobileNavOverlay: tw`absolute inset-0 bg-gray-900/30 [z-index: 9999]`,
  mobileNav: tw`h-full w-3/4 bg-gray-600 border-r border-gray-700 flex flex-col`,
  mobileNavHeading: tw`text-center px-2 py-4 border-b border-gray-700`,
  mobileNavLinks: tw`text-xl font-medium`,
  mobileNavLinksItem: tw`p-4 border-b border-gray-700 block transition canhover:hover:text-gray-400`,
  mobileNavCopyright: tw`grow flex justify-center items-end pb-2 text-gray-500`
}

const Nav = ({ pathname }: NavProps) => {
  const [ mobileOpen, setMobileOpen ] = useState(false)

  return (
    <>
      <Transition
        show={mobileOpen}
        {...{
          enter: cx(css(tw`transition-opacity duration-500 [z-index: 9999]`)),
          enterFrom: cx(css(tw`opacity-0`)),
          leave: cx(css(tw`transition-opacity duration-500 [z-index: 9999]`)),
          leaveTo: cx(css(tw`opacity-0`))
        }}
      >
        <div css={styles.mobileNavOverlay} onClick={() => setMobileOpen(!mobileOpen)}>
          <div css={styles.mobileNav}>
            <h1 css={styles.mobileNavHeading}>McMineserver</h1>
            <ul css={styles.mobileNavLinks}>
              { navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} css={styles.mobileNavLinksItem}>
                    {link.text}
                  </Link>
                </li>
              )) }
            </ul>
            <div css={styles.mobileNavCopyright}>
              <p>&copy; {new Date().getFullYear()} DerLev</p>
            </div>
          </div>
        </div>
      </Transition>
      <nav css={styles.nav({ pathname })}>
        <button css={[styles.mobileNavButton, styles.hoverButton]} onClick={() => setMobileOpen(!mobileOpen)}>
          <HiOutlineBars3 />
        </button>
        <Link href="/" css={[styles.title, styles.hoverButton]}>McMineserver</Link>
        <div css={styles.links}>
          { navLinks.map((link, i) => (
            <Link href={link.href} key={i} css={[styles.linksItem, styles.hoverButton]}>{link.text}</Link>
          )) }
        </div>
      </nav>
    </>
  )
}

export default Nav
