import postcssNesting from 'postcss-nesting'
import postcssNested from 'postcss-nested'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    postcssNested(),
    postcssNesting(),
    tailwindcss(),
    autoprefixer(),
  ],
}
