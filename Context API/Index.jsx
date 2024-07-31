import React from 'react'

import Login from './components/Login'
import Profile from './components/Profile'
import './style.css'

import UserContextProvider from './context/UserContextProvider'

const Index = () => {
  return (
    <UserContextProvider>
      <div className="container">
        <h1>Context API</h1>
        <Login />
        <Profile />
      </div >
    </UserContextProvider>
  )
}

export default Index;