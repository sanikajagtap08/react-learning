import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-8 p-6 w-2/3  '>
    
  {props.users.map(function(elem,idx){
    return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
  })}
      
    </div>
  )
}

export default RightContent
