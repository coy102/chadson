import merge from 'deepmerge'

import borderRadius from '../theme/borderRadius'
import colors from '../theme/colors'

const config = {
  darkMode: ['class'],
  content: ['./node_modules/chadson/components/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors,
      borderRadius,
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

const withChadson = (tailwindConfig: any) => {
  return merge(config, { ...tailwindConfig })
}

export { withChadson }
