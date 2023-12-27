/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        brand: '#61C08E',
        brandAccent: '#50A478',
        text1: '#101210',
        text2: '#383A38',
        text3: '#656665',
        text4: '#959795',
        buttonText: '#fff',
        border1: '#242424',
        border2: '#AFAFAF',
        border3: '#D3D3D3',
        border4: '#ECECEC',
        background1: '#FAFAFA',
        background2: '#fff'
      }
    },
  },
  plugins: [],
}