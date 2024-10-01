import React from 'react'

const footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
       <span>Weston Rwigema{currentYear}&copy;</span>
    </footer>
  )
}

export default footer
