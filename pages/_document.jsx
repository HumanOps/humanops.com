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
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
                    <link rel="canonical" href="http://www.humanops.com/" />

                    <meta name="description" content="HumanOps is a set of principles which focus on the human aspects of running infrastructure. The health of your infrastructure is not just about hardware, software, automations and uptime - it also includes the health and wellbeing of your team." />
                    <meta property="og:title" content="HumanOps" />
                    <meta property="og:description" content="HumanOps is a set of principles which focus on the human aspects of running infrastructure. The health of your infrastructure is not just about hardware, software, automations and uptime - it also includes the health and wellbeing of your team." />
                    <meta property="og:url" content="http://www.humanops.com/" />
                    <meta property="og:site_name" content="HumanOps" />
                    <meta property="og:image" content="/static/images/humanops-banner.png" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@humanops" />
                    <meta name="twitter:creator" content="@humanops" />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
                        {
                            "@context": "http://schema.org",
                                "@type": "WebSite",
                                "name": "HumanOps",
                                "headline": "HumanOps",
                                "description": "HumanOps is a set of principles which focus on the human aspects of running infrastructure. The health of your infrastructure is not just about hardware, software, automations and uptime - it also includes the health and wellbeing of your team.",
                                "url": "http://www.humanops.com/"
                        }
                    `}} />

                    {this.props.styleTags}

                    <style dangerouslySetInnerHTML={{__html: `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        position: relative;

        font-size: ${ Typography.baseFontSize }px;

        /* For fluid typography (https://www.smashingmagazine.com/2016/05/fluid-typography/) */
        font-size: calc(1em + 0.8vw);

        background: ${ Color.brand('primary') };
    }

    @media screen and (min-width: 75em) {
        html {
            font-size: 1.5em;
        }
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

                    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
                    <script dangerouslySetInnerHTML={{__html: `
    WebFont.load({
        google: {
        families: ['Nunito:300,400,700']
    }
})
` }} />
                </body>
            </html>
    )
}
}
