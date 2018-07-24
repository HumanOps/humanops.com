import * as React from 'react'

interface Props {
    message: string
    children?: any
}

const Test: React.StatelessComponent<Props> = (props: Props) => (
    <span>{ props.message }</span>
)

export default Test
