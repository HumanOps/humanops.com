import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { spacing } from '../design-system/utilities/layout'

import { BaseElementProps } from '../types/element'

import Link from './link'
import TwitterIcon from './twitter-icon'
import GitHubIcon from './github-icon'

interface SocialLinksProps extends BaseElementProps {
}

const linkDetails = [
    { href: 'https://twitter.com/humanops', icon: TwitterIcon, title: 'Twitter' },
    { href: 'https://github.com/humanops', icon: GitHubIcon, title: 'Github' }
]

const SocialLinks: React.StatelessComponent<SocialLinksProps> = (props) => (
    <div className={ classNames('social-links', props.className) }>

    { linkDetails.map(link => {
        const Icon = link.icon

        return (
            <div className='link-container' key={ link.href }>
                <Link title={ link.title } href={ link.href } external color='rgba(255, 255, 255, 0.5)' hoverColor='rgba(255, 255, 255, 1)'><Icon color='currentColor' /></Link>
            </div>
        )
    }) }
    </div>
)

const StyledSocialLinks = styled(SocialLinks)`
    list-style: none;
    display: flex;
    justify-content: space-between;

    .link-container {
        width: ${ spacing(3) };
        margin: 0 ${ spacing(1) };
    }
`

export default StyledSocialLinks
