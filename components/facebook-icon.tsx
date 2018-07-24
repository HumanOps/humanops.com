import React from 'react'

import Icon, { IconProps } from './icon'

interface FacebookIconProps extends IconProps {

}

const FacebookIcon: React.StatelessComponent<FacebookIconProps> = (props) => {
    return (
        <Icon color='#3B5998' className='icon--facebook' {...props}>
            <path className='fill' d="M147,77.47v55.07H106.66v67.34H147V400h82.88V199.89h55.62s5.21-32.29,7.73-67.6h-63v-46c0-6.88,9-16.14,18-16.14h45.16V0h-61.4C145,0,147,67.4,147,77.47Z" />
        </Icon>
    )
}

export default FacebookIcon
