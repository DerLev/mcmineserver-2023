import Link from 'next/link'
import tw from 'twin.macro'

interface NavProps {
  pathname: string
}

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'Discord', href: '/discord' },
]

const styles = {
  nav: ({ pathname }: { pathname: string }) => [
    tw`top-0 left-0 right-0 h-12 px-16 py-2 z-50 text-xl font-display`,
    tw`flex justify-between items-center border-b border-gray-800 backdrop-blur-sm bg-gray-800/30`,
    pathname !== '/' ? tw`sticky` : tw`fixed`
  ],
  title: [
    tw`px-2 py-1 text-2xl font-bold rounded-lg border border-transparent`,
    tw`hover:(text-white border-gray-700 bg-gray-900/70) transition`
  ],
  links: tw`flex gap-4`,
  links_item: [
    tw`py-1 px-2 border border-transparent rounded-lg`,
    tw`hover:(text-white border-gray-700 bg-gray-900/70) transition`
  ]
}

const Nav = ({ pathname }: NavProps) => (
  <nav css={styles.nav({ pathname })}>
    <Link href="/" css={styles.title}>McMineserver</Link>
    <div css={styles.links}>
      { navLinks.map((link, i) => (
        <Link href={link.href} key={i} css={styles.links_item}>{link.text}</Link>
      )) }
    </div>
  </nav>
)

export default Nav
