/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./src/**/*.{html,js}", "./scripts/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'xs': '376px',

                'sm': '421px',

                'md': '630px',
            },
            colors: {
                lightgrey: '#F4F4F4',
                grey: '#939393',
                black: '#000000',
                yellow : '#FFE200',
                darkgrey : '#727272'
            },
            fontFamily: {
                helvatica: ['Helvatica Neue', 'sans-serif']
            }
        },
    },
    plugins: [],
}
