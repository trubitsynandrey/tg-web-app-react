import React from 'react'

export const Button = ({children, ...props}) => {
  return (
    <button {...props} className={'button ' + props.className}>{children}</button>
  )
}

