import React, { SyntheticEvent, useContext, useState } from 'react'

import CategoryChooser from '../CategoryChooser/CategoryChooser'
import MenuSearchBar from '../SearchBar'

const MenuSidebar = () => {
  return (
    <>
      <MenuSearchBar />
      <CategoryChooser />
    </>
  )
}

export default MenuSidebar
