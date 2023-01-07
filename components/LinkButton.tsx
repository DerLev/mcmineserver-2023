import tw, { styled } from 'twin.macro'
import Link from 'next/link'

interface LinkButtonProps {
  size?: "small" | "normal"
  inline?: boolean
}

const LinkButton = styled(Link)(({ size, inline }: LinkButtonProps) => [
  tw`items-center justify-center gap-2 px-4 transition no-underline`,
  tw`border border-gray-700 rounded bg-gray-800/30 hover:bg-gray-800`,
  size === 'normal' ? tw`py-2` : tw`md:py-1 py-2`,
  inline === true ? tw`inline-flex w-fit` : tw`flex`
])

export default LinkButton
