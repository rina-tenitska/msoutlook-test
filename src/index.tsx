import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'

/* global document, Office, module, require */

const title = 'Contoso Task Pane Add-in'

const rootElement: HTMLElement = document.getElementById('container')
const root = createRoot(rootElement)

/* Render application after Office initializes */
Office.onReady(() => {
  root.render(
    <FluentProvider theme={webLightTheme}>
      <App title={title} />
    </FluentProvider>,
  )
})

if ((module as any).hot) {
  ;(module as any).hot.accept('./App', () => {
    const NextApp = require('./App').default
    root.render(NextApp)
  })
}
