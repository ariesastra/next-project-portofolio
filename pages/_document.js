import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          {/* Meta */}
          <meta name="description" content='A Site for my next.js programming language'/>
          <meta charSet='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='viewport' content='width=device-width' />
          
          {/* Style Link */}
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}