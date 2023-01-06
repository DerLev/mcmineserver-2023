import type { GetStaticProps, NextPage } from 'next'
import tw from 'twin.macro'
import PageHead from '@components/PageHead'

interface DiscordProps {
  discord: {
    [key: string]: any
  }
}

const styles = {

}

const Discord: NextPage<DiscordProps> = ({ discord }) => (
  <>
    <PageHead title="Discord" img='discord' />
    <pre>{ JSON.stringify(discord, null, 2) }</pre>
  </>
)

export default Discord

export const getStaticProps: GetStaticProps = async () => {
  const discord = await fetch('https://api.mc-mineserver.de/v3/discord/guild/420989146853670912').then((res) => res.json())

  return {
    props: {
      discord
    },
    revalidate: 60 * 60
  }
}
