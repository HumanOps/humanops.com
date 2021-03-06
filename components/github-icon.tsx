import React from 'react'

import Icon, { IconProps } from './icon'

interface GitHubIconProps extends IconProps {

}

const GitHubIcon: React.StatelessComponent<GitHubIconProps> = (props) => {
    return (
        <Icon color='#191717' className='icon--github' {...props}>
            <path className='fill' d="M200,6C90.16,6,1.1,95.06,1.1,204.9a198.92,198.92,0,0,0,136,188.73c10,1.81,13.57-4.33,13.57-9.57,0-4.74-.18-20.42-.28-37-55.31,12-67-23.45-67-23.45-9.06-23-22.09-29.09-22.09-29.09-18.07-12.33,1.38-12.09,1.38-12.09,20,1.39,30.48,20.5,30.48,20.5,17.75,30.4,46.57,21.61,57.88,16.51,1.81-12.82,7-21.61,12.62-26.56-44.15-5-90.6-22.1-90.6-98.31,0-21.74,7.76-39.46,20.46-53.38-2-5-8.87-25.29,2-52.66,0,0,16.68-5.35,54.71,20.39a188.18,188.18,0,0,1,99.57,0c37.95-25.76,54.65-20.4,54.65-20.4,10.87,27.41,4,47.61,2,52.64,12.75,13.92,20.44,31.65,20.44,53.38,0,76.4-46.53,93.23-90.83,98.16,7.16,6.17,13.49,18.26,13.49,36.81,0,26.59-.27,48-.27,54.58,0,5.29,3.62,11.48,13.7,9.53A199,199,0,0,0,398.9,204.9C398.9,95.06,309.84,6,200,6Z" transform="translate(-1.1 -6)" />
        </Icon>
    )
}

export default GitHubIcon
