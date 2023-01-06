import tw from 'twin.macro'
import Image from 'next/image'
import { indexStyles } from '@pages/index'
import LinkButton from '@components/LinkButton'
import { HiOutlineEnvelopeOpen } from 'react-icons/hi2'
import Dot from '@components/Dot'
import { useInView } from 'react-intersection-observer'
import { isAnimated } from '@lib/client'

import discordHead from '@assets/discord-head.svg'
import discordAvatar1 from '@assets/discord-avatar-1.svg'
import discordAvatar2 from '@assets/discord-avatar-2.svg'
import discordAvatar3 from '@assets/discord-avatar-3.svg'
import discordAvatar4 from '@assets/discord-avatar-4.svg'
import discordAvatar5 from '@assets/discord-avatar-5.svg'
import DiscordAvatar from '@components/DiscordAvatar'

interface DiscordProps {
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
  avatars: tw`flex`,
}

const Discord = ({ discord }: DiscordProps) => {
  const { ref, inView } = useInView()

  return (
    <div css={indexStyles.section} id="discord">
      <div css={indexStyles.sectionBackground}>
        <Image src={discordHead} alt="Discord Header Image" fill css={indexStyles.backgroundImage} />
      </div>
      <div css={indexStyles.sectionForeground}>
        <div css={styles.avatars}>
          { avatars.map((avatar, i) => (
            <DiscordAvatar alt={avatar.alt} src={avatar.src} inView={inView} index={i} key={i}  />
          )) }
        </div>
        <div css={[indexStyles.box, indexStyles.boxAnimation({ inView })]} ref={ref}>
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
  )
}

export default Discord
