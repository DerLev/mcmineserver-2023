import Link from 'next/link'
import tw from 'twin.macro'

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'Discord', href: '/discord' },
]

const styles = {
  nav: tw`h-12 sticky top-0 px-16 py-2 text-xl font-display flex justify-between items-center border-b border-gray-800 backdrop-blur-sm bg-gray-800/30`,
  title: tw`px-2 py-1 text-2xl font-bold rounded-lg border border-transparent hover:(text-white border-gray-700 bg-gray-900) transition`,
  links: tw`flex gap-4`,
  links_item: tw`border border-transparent rounded-lg hover:(text-white border-gray-700 bg-gray-900) transition py-1 px-2`
}

const Nav = () => (
  <nav css={styles.nav}>
    <Link href="/" css={styles.title}>McMineserver</Link>
    <div css={styles.links}>
      { navLinks.map((link, i) => (
        <Link href={link.href} key={i} css={styles.links_item}>{link.text}</Link>
      )) }
    </div>
  </nav>
)

export default Nav
