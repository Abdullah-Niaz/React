import React from 'react'
import { useParams } from 'react-router'

export default function User() {
    const {userid} = useParams()
  return (
    <div className="bg-gray-600 texxt-white text-3x p-4">User : {userid}</div>
  )
}
