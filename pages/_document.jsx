import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { Typography } from '../design-system/tokens'
import * as Color from '../design-system/utilities/color'

export default class HumanOpsDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()

        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        )

        const styleTags = sheet.getStyleElement()

        return { ...page, styleTags }
    }

    render() {
        return (
            <html lang='en'>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3.0, minimum-scale=1" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
                    <link rel="manifest" href="/static/favicons/site.webmanifest" />
                    <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#222222" />
                    <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#00aba9" />
                    <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />

                    {this.props.styleTags}

                    <link
                        href="https://fonts.googleapis.com/css?family=Nunito:300,400,700"
                        rel="stylesheet"
                    />

                    <style dangerouslySetInnerHTML={{__html: `
                        * {
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                        }

                        html {
                            position: relative;
                            font-size: ${ Typography.baseFontSize }px;
                            background: ${ Color.brand('primary') };
                        }
                        
                        ::selection {
                            color: ${ Color.lightest };
                            background: ${ Color.brand('cta') };
                        }
                    ` }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
