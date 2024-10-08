import React from 'react'

export default function Button(props) {
    const { text, func } = props
  
    return (
    <div>
        <button onClick={func} className='mx-auto px-8 py-4 rounded-md border-[2px] border-blue-400 border-double bg-slate-950 blueShadow duration-200'>
            <p>{text}</p>
        </button>
  </div>
  )
}
