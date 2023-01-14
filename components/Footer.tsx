import tw from 'twin.macro'

const styles = {
  footer: tw`w-full flex justify-center px-4 pb-2 [scroll-snap-align: start]`,
  copyright: tw`text-sm text-gray-700`
}

const Footer = () => (
  <footer css={styles.footer}>
    <p css={styles.copyright}>&copy; { new Date().getFullYear() } McMineserver</p>
  </footer>
)

export default Footer
