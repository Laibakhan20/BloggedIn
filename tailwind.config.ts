import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			myblack: '#191919',
  			lightgray: '#999999',
  			darkgray: '#666666',
  			darkbrown: '#333333',
  			mypurple: '#7C4EE4',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		fontFamily: {
  			rale: [
  				'var(--font-raleway)'
  			],
  			mono: [
  				'var(--font-roboto)'
  			],
  			eb: [
  				'var(--font-eb_garamond)'
  			]
  		},
  		screens: {
  			small: '300px',
  			medium: '431px',
  			large: '1024px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), ('@tailwindcss/typography')],
  
};
export default config;
