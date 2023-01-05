import tw, { styled } from 'twin.macro'
import Link from 'next/link'

const LinkButton = styled(Link)([
  tw`flex items-center justify-center gap-2 px-4 py-1 transition`,
  tw`border border-gray-700 rounded bg-gray-800/30 hover:bg-gray-800`
])

export default LinkButton
