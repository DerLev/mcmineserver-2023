import type { GetStaticProps, NextPage } from 'next'
import tw from 'twin.macro'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import DiscordAvatar from '@components/DiscordAvatar'
import LinkButton from '@components/LinkButton'
import { HiOutlineEnvelopeOpen } from 'react-icons/hi2'
import { isAnimated } from '@lib/client'
import Dot from '@components/Dot'

import snowyMountains from '@assets/snowy-mountains.webp'
import discordHead from '@assets/discord-head.svg'

import discordAvatar1 from '@assets/discord-avatar-1.svg'
import discordAvatar2 from '@assets/discord-avatar-2.svg'
import discordAvatar3 from '@assets/discord-avatar-3.svg'
import discordAvatar4 from '@assets/discord-avatar-4.svg'
import discordAvatar5 from '@assets/discord-avatar-5.svg'

interface HomeProps {
  discord: {
    [key: string]: any
  }
}

const avatars = [
  { alt: 'Discord Avatar 1', src: discordAvatar1 },
  { alt: 'Discord Avatar 2', src: discordAvatar2 },
  { alt: 'Discord Avatar 3', src: discordAvatar3 },
  { alt: 'Discord Avatar 4', src: discordAvatar4 },
  { alt: 'Discord Avatar 5', src: discordAvatar5 },
]

const styles = {
  section: tw`h-screen grid [scroll-snap-align: start]`,
  sectionBackground: tw`[grid-area: 1/1/2/2] relative`,
  sectionForeground: tw`[grid-area: 1/1/2/2] flex items-center justify-center shadow-xl gap-4 md:flex-row flex-col`,
  backgroundImage: tw`[object-fit: cover] [object-position: 50% 50%] [z-index: -100] select-none`,
  box: tw`bg-gray-800/30 py-4 px-6 rounded-lg backdrop-blur-lg border border-gray-700 m-2 lg:[min-width: 36rem] [max-width: 48rem] shadow-lg`,
  boxAnimation: ({ inView }: { inView: boolean }) => [
    tw`transition duration-700 transform delay-75`,
    inView ? tw`blur-none opacity-100` : tw`blur-xl opacity-0 translate-y-full`
  ],
  avatars: tw`flex`,
}

const Home: NextPage<HomeProps> = ({ discord }) => {
  const { ref, inView } = useInView()

  return (
    <>
      <div css={styles.section} id="home">
        <div css={styles.sectionBackground}>
          <Image src={snowyMountains} alt="Snowy Mountains Header Image" fill css={styles.backgroundImage} />
        </div>
        <div css={styles.sectionForeground}>
          <div css={styles.box}>
            <h1 css={tw`text-center mb-4`}>McMineserver</h1>
            <p><strong>Was wir bieten:</strong></p>
            <ul css={tw`list-disc list-inside`}>
              <li>Einen Discord server zum chatten</li>
              <li>Hosting von Minecraft Servern</li>
              <li>Hosting von anderen Servern (Satisfactory, Terraria, uvm.)</li>
            </ul>
          </div>
        </div>
      </div>
      <div css={styles.section} id="discord">
        <div css={styles.sectionBackground}>
          <Image src={discordHead} alt="Discord Header Image" fill css={styles.backgroundImage} />
        </div>
        <div css={styles.sectionForeground}>
          <div css={styles.avatars}>
            { avatars.map((avatar, i) => (
              <DiscordAvatar alt={avatar.alt} src={avatar.src} inView={inView} index={i} key={i}  />
            )) }
          </div>
          <div css={[styles.box, styles.boxAnimation({ inView })]} ref={ref}>
            <h1 css={tw`md:hidden`}>Discord: { discord.name }</h1>
            <div css={tw`flex items-center`}>
              <div css={tw`h-32 w-32 shrink-0`}>
                <Image src={'https://cdn.discordapp.com/icons/' + discord.id + '/' + discord.icon + `${isAnimated(discord.icon) ? '.gif' : '.png'}?size=256`} alt="DerLev [Official] server icon" width={256} height={256} />
              </div>
              <div css={tw`grow flex flex-col`}>
                <h1 css={tw`hidden md:block`}>Discord: { discord.name }</h1>
                <div css={tw`flex items-center gap-2 ml-2`}>
                  <Dot css={tw`bg-green-500`} />
                  <p>{ discord.approximate_presence_count } Online</p>
                </div>
                <div css={tw`flex items-center gap-2 ml-2`}>
                  <Dot css={tw`bg-gray-400`} />
                  <p>{ discord.approximate_member_count } Member</p>
                </div>
                <LinkButton href="/discord" css={tw`mt-4`}>
                  <HiOutlineEnvelopeOpen />
                  <span>Zum Invite</span>
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const discord = await fetch('https://api.mc-mineserver.de/v3/discord/guild/420989146853670912').then((res) => res.json())

  return {
    props: {
      discord
    },
    revalidate: 60 * 60 * 60
  }
}
