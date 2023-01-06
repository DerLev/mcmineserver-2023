import type { GetStaticProps, NextPage } from 'next'
import tw from 'twin.macro'
import Main from '@components/HomeSections/Main'
import Discord from '@components/HomeSections/Discord'

interface HomeProps {
  discord: {
    [key: string]: any
  }
}

const styles = {
  section: tw`h-screen grid [scroll-snap-align: start]`,
  sectionBackground: tw`[grid-area: 1/1/2/2] relative`,
  sectionForeground: tw`[grid-area: 1/1/2/2] flex items-center justify-center shadow-xl gap-4 md:flex-row flex-col`,
  backgroundImage: tw`[object-fit: cover] [object-position: 50% 50%] [z-index: -100] select-none`,
  box: tw`bg-gray-800/30 py-4 px-6 rounded-lg backdrop-blur-lg border border-gray-700 m-2 lg:[min-width: 36rem] [max-width: 48rem] shadow-lg`,
  boxAnimation: ({ inView }: { inView: boolean }) => [
    tw`transition duration-700 transform delay-75`,
    inView ? tw`blur-none opacity-100` : tw`motion-safe:(blur-xl opacity-0 translate-y-full)`
  ],
}

const Home: NextPage<HomeProps> = ({ discord }) => (
  <>
    <Main />
    <Discord discord={discord} />
  </>
)

export default Home

export { styles as indexStyles }

export const getStaticProps: GetStaticProps = async () => {
  const discord = await fetch('https://api.mc-mineserver.de/v3/discord/guild/420989146853670912').then((res) => res.json())

  return {
    props: {
      discord
    },
    revalidate: 60 * 60
  }
}
