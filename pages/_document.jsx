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
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3.0, minimum-scale=1" />

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
