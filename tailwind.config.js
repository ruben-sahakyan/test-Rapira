module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '375px',
      'tablet': '800px',
      'tabletX': '',
      'desktop': '1400px'
    },
    extend: {
      colors: {
        'tag-bg-color': 'rgba(238, 246, 255, 1)',
        'tag-text-color': 'rgba(40, 132, 239, 1)',
        'text-color-first': 'rgba(126, 130, 153, 1)',
        'text-color-second': 'rgba(161, 165, 183, 1)',
        'text-color-third': 'rgba(62, 151, 255, 1)',
        'border-color-first': 'rgba(241, 241, 242, 1)',
        'border-color-second': 'rgba(62, 151, 255, 1)',
        'background-color-first': 'rgba(238, 246, 255, 1)',
        'img-color-first': 'brightness(0) saturate(100%) invert(66%) sepia(9%) saturate(438%) hue-rotate(192deg) brightness(98%) contrast(95%)'
      }
    },
  },
  plugins: [],
}
