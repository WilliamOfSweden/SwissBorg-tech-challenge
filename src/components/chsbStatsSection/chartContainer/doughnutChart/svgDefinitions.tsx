import React from 'react'

const SvgDefinitions = () => (
  <defs>
    <linearGradient id='circulating-gradient' gradientTransform='rotate(180)'>
      <stop offset='0%' stopColor='#CCF3E8'></stop>
      <stop offset='100%' stopColor='#93fcde'></stop>
    </linearGradient>
    <linearGradient id='stacked-gradient' gradientTransform='rotate(180)'>
      <stop offset='0%' stopColor='#13E5BF'></stop>
      <stop offset='100%' stopColor='#01C38D'></stop>
    </linearGradient>
    <linearGradient id='burned-gradient' gradientTransform='rotate(180)'>
      <stop offset='0%' stopColor='#364053'></stop>
      <stop offset='100%' stopColor='#191E29'></stop>
    </linearGradient>
    <linearGradient id='yield-gradient' gradientTransform='rotate(270)'>
      <stop offset='0%' stopColor='#9373FF'></stop>
      <stop offset='100%' stopColor='#5A3FFF'></stop>
    </linearGradient>
    <linearGradient id='buy-back-gradient' gradientTransform='rotate(270)'>
      <stop offset='0%' stopColor='#7ABCFF'></stop>
      <stop offset='100%' stopColor='#2D95FF'></stop>
    </linearGradient>
  </defs>
)

export default SvgDefinitions
