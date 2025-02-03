import React from 'react'

export default function Loading({theme}) {
  return (
    
    <div className='d-flex justify-conetent-center m-auto'>
        <div className={`loading spinner-border text-${theme||"success"}`}></div>
    </div>
  )
}
 