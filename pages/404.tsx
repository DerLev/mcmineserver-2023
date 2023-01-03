import tw from 'twin.macro'

const styles = {
  container: tw`grow flex justify-center items-center text-2xl`,
  error: tw`font-semibold pr-4 border-r border-gray-500 mr-4`
}

const Custom404 = () => (
  <div css={styles.container}>
    <span css={styles.error}>404</span>
    <span>Not Found</span>
  </div>
)

export default Custom404
