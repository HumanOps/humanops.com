import React from 'react'

import Icon, { IconProps } from './icon'

interface LocationIconProps extends IconProps {

}

const LocationIcon: React.StatelessComponent<LocationIconProps> = (props) => {
    return (
        <Icon color='#111' className='icon--location' {...props}>
            <path className='fill' d="M200,0C122,0,60,62,60,140S200,400,200,400,340,218,340,140,278,0,200,0Zm0,200c-34,0-60-26-60-60s26-60,60-60,60,26,60,60S234,200,200,200Z" transform="translate(-60)"/>
        </Icon>
    )
}

export default LocationIcon
