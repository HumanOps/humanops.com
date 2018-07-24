import React from 'react'

import Icon, { IconProps } from './icon'

interface CalendarIconProps extends IconProps {

}

const CalendarIcon: React.StatelessComponent<CalendarIconProps> = (props) => {
    return (
        <Icon color='#111' className='icon--location' {...props}>
            <path className='fill' d="M24,128V367.62A32.19,32.19,0,0,0,56,400H344a32.19,32.19,0,0,0,32-32.38V128Zm88,248H48V312h64Zm0-80H48V232h64Zm0-80H48V152h64Zm80,160H128V312h64Zm0-80H128V232h64Zm0-80H128V152h64Zm80,160H208V312h64Zm0-80H208V232h64Zm0-80H208V152h64Zm80,160H288V312h64Zm0-80H288V232h64Zm0-80H288V152h64ZM344,48H292V12a12,12,0,0,0-24,0V48H132V12a12,12,0,0,0-24,0V48H56A32.19,32.19,0,0,0,24,80.37V112H376V80.37A32.19,32.19,0,0,0,344,48ZM120,104a24,24,0,0,1-12-44.76V80a12,12,0,0,0,24,0V59.24A24,24,0,0,1,120,104Zm160,0a24,24,0,0,1-12-44.76V80a12,12,0,0,0,24,0V59.24A24,24,0,0,1,280,104Z" />
        </Icon>
    )
}

export default CalendarIcon
