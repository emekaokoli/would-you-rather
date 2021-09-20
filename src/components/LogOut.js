import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleResetAuth } from '../redux/authenticateUser.slice.reducer'

export const LogOut = () => {
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(handleResetAuth())
  }
  return (
    <Link to="/" onClick={logOut} style={{textDecoration:'none', }}>
      LogOut
    </Link>
  )
}
