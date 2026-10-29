// import React from 'react'

export default function Button({btnname, icon = null, className = "", type}) {
  return (
    <>
      <button
      type={type}
      className={`${className}`}
      >
        {icon}
        {btnname}
      </button>
    </>
  )
}
