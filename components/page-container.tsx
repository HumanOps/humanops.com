import Head from 'next/head'
import classNames from 'classnames'
import styled from 'styled-components'

import { Typography } from '../design-system/tokens'
import { spacing } from '../design-system/utilities/layout'

import Header from './header'
import Footer from './footer'

interface Props {
    className?: string,
    title?: string,
    children?: any
}

const PageContainer = (props: Props) => (
    <div className={ classNames('page-container', props.className) }>
        <Head>
            { props.title && <title key='title'>{ props.title}</title> }
        </Head>


        <div className='header-container'>
            <Header />
        </div>

        <div className='content-container'>
            { props.children }
        </div>

        <Footer />
    </div>
)

const StyledPageContainer = styled(PageContainer)`
    position: relative;
    min-width: 300px;
    font-family: ${ Typography.fontStack };

    .header-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }

    .content-container {
        background: white;
        padding-bottom: ${ spacing(10) };
    }
`

export default StyledPageContainer
