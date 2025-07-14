import React from 'react'

interface props{
    title: string;
}
const TitleButton = ({title}: props) => {
  return (
    <div className='bg-gray-200 w-fit h-fit text-center py-2 px-4 body font-bold rounded-full text-sm'>
        <p>{title}</p>
    </div>
  )
}

export default TitleButton