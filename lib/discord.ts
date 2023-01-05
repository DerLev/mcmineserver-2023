/**
 * Determine if an image from Discord's CDN is a GIF
 * @param url Input URL of User Avatar or Server Icon
 */
const isAnimated = (url: string) => {
  const animated = url.substring(0, 2)
  if(animated == "a_") return true
  return false
}

export { isAnimated }
