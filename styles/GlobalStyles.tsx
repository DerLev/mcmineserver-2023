import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    ...tw`antialiased bg-gray-900 text-gray-50`,
    ...tw`font-body [h1, h2, h3, h4]:(font-display font-medium)`,
    ...tw`[h1]:(text-4xl) [h2]:(text-3xl) [h3]:(text-2xl) [h4]:(text-xl)`,
  },

  a: {
    ...tw`underline decoration-blue-400 decoration-from-font decoration-dotted`,
    ...tw`transition canhover:hover:(decoration-blue-300)`,
    ...tw`focus-visible:(ring ring-blue-500 outline-none)`,
  },

  button: {
    ...tw`focus-visible:(ring ring-blue-500 outline-none)`,
  },

  hr: {
    ...tw`my-4 border-t border-t-2 border-gray-800 border-dotted`,
  }
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
