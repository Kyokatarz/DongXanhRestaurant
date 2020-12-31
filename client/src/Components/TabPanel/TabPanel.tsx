import React from 'react'

type Props = {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel: React.FC<Props> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {children}
    </div>
  )
}

export default TabPanel
