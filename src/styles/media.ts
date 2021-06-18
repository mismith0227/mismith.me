export const sizes = {
  small: 600,
  medium: 768,
  large: 1024,
}

const media = {
  small: `@media (max-width: ${sizes.small / 16}em)`,
  medium: `@media (max-width: ${sizes.medium / 16}em)`,
  large: `@media (max-width: ${sizes.large / 16}em)`,
}

export default media
