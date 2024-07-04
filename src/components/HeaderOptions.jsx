import React from 'react'

const HeaderOptions = ({text,borderBottom}) => {
  return (
      <div>
          <p className={`text-[#617F82] font-medium text-[16px] cursor-pointer ${borderBottom && 'w-full border-b-2 border-[#617f82]'}`}>{text}</p>
    </div>
  )
}

export default HeaderOptions