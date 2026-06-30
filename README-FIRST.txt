<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <radialGradient id="g" cx="50%" cy="42%" r="70%">
      <stop offset="0" stop-color="#233c29"/>
      <stop offset=".55" stop-color="#07100c"/>
      <stop offset="1" stop-color="#010302"/>
    </radialGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="1.4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="64" height="64" rx="13" fill="url(#g)"/>
  <path d="M13 47 32 8l19 39-9 4-10-22-10 22z" fill="#8ff06f" filter="url(#glow)"/>
  <path d="M20 48c6-8 18-8 24 0-4 3-20 3-24 0Z" fill="#d7ff78" opacity=".92"/>
  <path d="M25 43h14v5H25z" fill="#06110a"/>
</svg>
