import React from 'react'
import { Children } from 'react'

const Link = ({children, href}) => {
  return (
    <a href={href} className='btn'>{Children}</a>
  )
}

export default Link
