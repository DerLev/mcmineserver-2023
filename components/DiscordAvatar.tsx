import tw from 'twin.macro'
import Image from 'next/image'

interface DiscordAvatarProps {
  alt: string
  src: any
  inView: boolean
  index: number
}

const styles = {
  container: ({ inView, index }: { inView: boolean, index: number }) => [
    tw`[margin-left: -1.75rem] shadow-lg rounded-full transform transition duration-700`,
    inView ? index === 0 ? tw`[transition-delay: 900ms]` :
    index === 1 ? tw`[transition-delay: 800ms]` :
    index === 2 ? tw`[transition-delay: 700ms]` :
    index === 3 ? tw`[transition-delay: 600ms]` :
    tw`[transition-delay: 500ms]` :
    tw`-translate-x-32 opacity-0`
  ],
}

const DiscordAvatar = ({ alt, src, inView, index }: DiscordAvatarProps) => (
  <div css={styles.container({ inView, index })}>
    <Image src={src} alt={alt} height={76} width={76} />
  </div>
)

export default DiscordAvatar
