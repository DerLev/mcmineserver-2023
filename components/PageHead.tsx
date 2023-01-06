import tw from 'twin.macro'
import Image from 'next/image'

import DefaultHead from '@assets/default-head.webp'
import DiscordHead from '@assets/discord-head.svg'

interface PageHeadProps {
  img?: "default" | "discord"
  title: string
}

const styles = {
  container: tw`grid shadow-xl rounded-xl overflow-hidden md:h-96 h-80 mb-4`,
  background: tw`[grid-area: 1/1/2/2] relative`,
  backgroundImage: tw`[object-fit: cover] [object-position: 50% 50%] [z-index: -100] select-none`,
  foreground: tw`[grid-area: 1/1/2/2] flex items-center justify-center`,
  title: tw`text-5xl font-semibold drop-shadow-xl`,
}

const bgImage = (img?: "default" | "discord") => {
  switch (img) {
    case 'discord':
      return DiscordHead
    default:
      return DefaultHead
  }
}

const PageHead = ({ title, img }: PageHeadProps) => (
  <div css={styles.container}>
    <div css={styles.background}>
      <Image src={bgImage(img)} alt="Header Image" fill css={styles.backgroundImage} />
    </div>
    <div css={styles.foreground}>
      <h1 css={styles.title}>{title}</h1>
    </div>
  </div>
)

export default PageHead
