import type { NextPage, GetStaticProps } from 'next'
import tw from 'twin.macro'
import PageHead from '@components/PageHead'
import InfoBox from '@components/InfoBox'
import LinkButton from '@components/LinkButton'
import { HiOutlineServer } from 'react-icons/hi'
import Dot from '@components/Dot'
import { dateTime } from '@lib/client'

interface HostingProps {
  servers: number
  currentTime: string
}

const styles = {
  activeServers: tw`flex items-center justify-center gap-2`,
  lastUpdate: tw`text-gray-500 text-center mt-1`
}

const Hosting: NextPage<HostingProps> = ({ servers, currentTime }) => (
  <>
    <PageHead title='Hosting' />
    <InfoBox type='info'>
      <p className='boxTitle'>Zugriff auf Einladung</p>
      <p>
        Unser Hosting beschränkt sich nur auf Privatpersonen mit Einladung
      </p>
    </InfoBox>
    <hr />
    <LinkButton href='https://sm.mc-mineserver.de'>
      <HiOutlineServer />
      <span>Server Panel</span>
    </LinkButton>
    <hr />
    <div css={styles.activeServers}>
      <Dot css={tw`bg-green-500`} />
      <span>
        {servers}{' '}
        { servers === 1 ? 'Aktiver' : 'Aktive' }{' '}
        Server
      </span>
    </div>
    <p css={styles.lastUpdate}>Zuletzt aktualisiert: {currentTime}</p>
  </>
)

export default Hosting

export const getStaticProps: GetStaticProps = async () => {
  const panel = await fetch(
    'https://sm.mc-mineserver.de/api/application/servers',
    {
      headers: { 'Authorization': 'Bearer ' + process.env.PTERODACTYL_TOKEN },
      method: 'GET'
    }
  ).then((res) => res.json())

  const currentTime = dateTime.format(new Date())

  return {
    props: {
      servers: panel.meta.pagination.total,
      currentTime
    },
    revalidate: 60 * 60 * 24
  }
}
