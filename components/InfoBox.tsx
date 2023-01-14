import tw, { styled } from 'twin.macro'

interface InfoBoxProps {
  type?: "info" | "success" | "warning" | "error"
  inline?: boolean
}

const InfoBox = styled.div(({ type, inline }: InfoBoxProps) => [
  tw`py-2 px-4 border-l-4 border rounded-sm shadow`,
  tw`[.boxTitle]:(font-semibold text-base m-0)`,
  type === 'error' ? tw`bg-red-600 border-red-500 text-red-100` :
  type === 'warning' ? tw`bg-yellow-700 border-yellow-600 text-yellow-100` :
  type === 'success' ? tw`bg-green-700 border-green-600 text-green-100` :
  type === 'info' ? tw`bg-blue-600 border-blue-500 text-blue-100` :
  tw`bg-gray-800 border-gray-700`,
  inline === true ? tw`inline-block w-fit` : tw`block w-full`
])

export default InfoBox
