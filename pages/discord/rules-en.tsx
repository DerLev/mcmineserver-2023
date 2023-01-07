import type { NextPage } from 'next'
import { discordStyles } from '@pages/discord/index'
import PageHead from '@components/PageHead'
import LinkButton from '@components/LinkButton'
import { HiOutlineArrowLeft } from 'react-icons/hi2'
import Link from 'next/link'
import tw from 'twin.macro'

const RulesEN: NextPage = () => (
  <>
    <PageHead title='Rules' img='discord' />
    <h2 css={discordStyles.heading2}>Rules in English</h2>
    <LinkButton href="/discord#invite" inline>
      <HiOutlineArrowLeft />
      Back to Invite
    </LinkButton>
    <p css={discordStyles.rulesNotice}>Following the rules is mandatory and will be severely punished if they are not observed</p>
    <ol css={discordStyles.rulesList}>
      <li><strong>NO</strong> Spam</li>
      <li><strong>NO</strong> inappropriate messages to other members</li>
      <li><strong>NO</strong> inappropriate NSFW links, pictures, etc.</li>
      <li><strong>NO</strong> advertising of any kind</li>
      <li><strong>NO</strong> earrape of any kind in chat or voice chat</li>
      <li><strong>FOLLOW</strong> the <Link href="https://discord.com/guidelines" rel="noopener noreferrer">Community-Guidelines</Link></li>
    </ol>
  </>
)

export default RulesEN
