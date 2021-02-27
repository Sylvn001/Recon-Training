import '../css/global.css'

import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  return(
    <Component {...pageProps}/>
  )
}

export default MyApp
