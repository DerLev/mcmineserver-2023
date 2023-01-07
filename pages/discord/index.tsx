import type { GetStaticProps, NextPage } from 'next'
import tw from 'twin.macro'
import PageHead from '@components/PageHead'
import Dot from '@components/Dot'
import { isAnimated } from '@lib/client'
import Image from 'next/image'
import LinkButton from '@components/LinkButton'
import { HiOutlineEnvelopeOpen, HiOutlineLanguage } from 'react-icons/hi2'
import Link from 'next/link'

interface DiscordProps {
  discord: {
    [key: string]: any
  }
}

const styles = {
  heading2: tw`mb-3`,
  infoContainer: tw`grid grid-cols-2`,
  infoImageContainer: tw`flex items-center justify-end`,
  infoImage: tw`h-32 w-32 rounded-full overflow-hidden`,
  infoTextContainer: tw`flex flex-col items-start justify-center`,
  infoTextCount: tw`flex gap-1.5 items-center ml-2`,
  rulesNotice: tw`font-semibold text-center py-2`,
  rulesList: tw`list-inside list-decimal px-2 mb-2`,
  bottomWhiteSpace: tw`h-32`,
}

const Discord: NextPage<DiscordProps> = ({ discord }) => (
  <>
    <PageHead title="Discord" img='discord' />
    <h2 css={styles.heading2} id="info">Info</h2>
    <div css={styles.infoContainer}>
      <div css={styles.infoImageContainer}>
        <Image src={'https://cdn.discordapp.com/icons/' + discord.id + '/' + discord.icon + `${isAnimated(discord.icon) ? '.gif' : '.png'}?size=256`} alt="DerLev [Official] server icon" width={256} height={256} css={styles.infoImage} />
      </div>
      <div css={styles.infoTextContainer}>
        <h3>{ discord.name }</h3>
        <div css={styles.infoTextCount}>
          <Dot css={tw`bg-green-500`} />
          <span>{ discord.approximate_presence_count } Online</span>
        </div>
        <div css={styles.infoTextCount}>
          <Dot />
          <span>{ discord.approximate_member_count } Member</span>
        </div>
      </div>
    </div>
    <h2 css={styles.heading2} id="rules">Regeln</h2>
    <LinkButton href="/discord/rules-en" inline>
      <HiOutlineLanguage />
      Rules in English
    </LinkButton>
    <p css={styles.rulesNotice}>Das Bevolgen dieser Regeln ist verbindlich und wird bei nicht beachten hart bestraft</p>
    <ol css={styles.rulesList}>
      <li><strong>KEIN</strong> Spam</li>
      <li><strong>KEINE</strong> unangemessenen Nachrichten gegenüber anderen Mitgliedern</li>
      <li><strong>KEINE</strong> unangebrachten NSFW Links, Bilder, etc.</li>
      <li><strong>KEINE</strong> Werbung jeglicher Art</li>
      <li><strong>KEIN</strong> Earrape jeglicher Art im Chat oder Voice-Chat</li>
      <li><strong>BEFOLGT</strong> die <Link href="https://discord.com/guidelines" rel="noopener noreferrer">Community-Richtlinien</Link></li>
    </ol>
    <h2 css={styles.heading2} id="invite">Invite</h2>
    <LinkButton href="https://s.mc-mineserver.de/discord" rel="noopener noreferrer" size='normal'>
      <HiOutlineEnvelopeOpen />
      <span>Zum Invite</span>
    </LinkButton>
    <div css={styles.bottomWhiteSpace} />
  </>
)

export default Discord

export { styles as discordStyles }

export const getStaticProps: GetStaticProps = async () => {
  const discord = await fetch('https://api.mc-mineserver.de/v3/discord/guild/420989146853670912').then((res) => res.json())

  return {
    props: {
      discord
    },
    revalidate: 60 * 60
  }
}
