import tw from 'twin.macro'
import Image from 'next/image'
import { indexStyles } from '@pages/index'
import { useInView } from 'react-intersection-observer'

import SnowyMountains from '@assets/snowy-mountains.webp'

const styles = {
  heading: tw`text-center mb-4`,
  list: tw`list-disc list-inside`,
}

const Main = () => {
  const { ref, inView } = useInView()

  return (
    <div css={indexStyles.section} id="home">
      <div css={indexStyles.sectionBackground}>
        <Image src={SnowyMountains} alt="Snowy Mountains Header Image" fill css={indexStyles.backgroundImage} />
      </div>
      <div css={indexStyles.sectionForeground}>
        <div css={[indexStyles.box, indexStyles.boxAnimation({ inView })]} ref={ref}>
          <h1 css={styles.heading}>McMineserver</h1>
          <p><strong>Was wir bieten:</strong></p>
          <ul css={styles.list}>
            <li>Einen Discord server zum chatten</li>
            <li>Hosting von Minecraft Servern</li>
            <li>Hosting von anderen Servern (Satisfactory, Terraria, uvm.)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main
