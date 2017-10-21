import React from 'react'
import {render} from 'react-dom'
import DisqusChecker from './DisqusChecker'

const disqusProxy = document.getElementById('disqus_proxy_thread')
let disqus = document.getElementById('disqus-thread')

if (disqusProxy && !disqus) {
  disqus = document.createElement('div')
  disqus.id = 'disqus_thread'
  disqusProxy.parentNode.appendChild(disqus)
  render(<DisqusChecker/>, disqusProxy)
}
