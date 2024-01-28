import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Layout = ({children,onLogout,isLoged,articleData}) => {
  
  const [article,setArticles] = useState([]);
  
  useEffect(() => {
    setArticles(articleData)
  },[articleData])

  return (
    <>
    <div>
      <Navbar onLogout={onLogout} articleData={articleData} isLooged={isLoged} />
        {children}
    </div>
    </>
  )
}

export default Layout
