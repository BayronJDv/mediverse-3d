import React, { Children } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '../stores/userAtom'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const [user] = useAtom(userAtom)

  return user ? children : <Navigate to="/"/>;

}


