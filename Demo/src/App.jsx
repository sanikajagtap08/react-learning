
//code for section1 section2 wala project

// import Section1 from './components/section1/Section1'
// import Section2 from './components/section2/Section2'

// const App = () => {

//   const users = [
    
//     {
//       img: 'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',
//       intro: '',
//       color: 'royalblue',
//       tag: 'Satisfied'
//     },
//     {
//       img: 'https://plus.unsplash.com/premium_photo-1661576736099-4d4e613bddca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHMlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D' ,
//       intro: '',
      
//       color: 'lightseagreen',
//       tag: 'UnderServed'
//     },
//     {
//       img: 'https://media.istockphoto.com/id/2029606603/photo/confident-indian-businessman-with-beard-working-on-laptop-at-modern-office-desk.jpg?s=612x612&w=0&k=20&c=LZI7gtXRpfq5lcwh8bbb-cFAMuljlp_0tPF2d7vLtdE=',
//       intro: '',
//       color: 'orange',
//       tag: 'UnderBanked'
//     },
//     {
//       img: 'https://media.istockphoto.com/id/1682256689/photo/hispanic-businesswoman-with-arms-crossed-over-white-background.jpg?s=612x612&w=0&k=20&c=TrjInmzlQisixNQbXrva2tON3CTwNumtiwzF2n_NMck=',
//       intro: '',
//       color: 'black',
//       tag: 'Average'
//     },

//     {
//       img: 'https://media.istockphoto.com/id/1475055206/photo/full-length-of-confident-woman-posing-against-isolated-background.jpg?s=612x612&w=0&k=20&c=OwCdHyDkGYNF0oBQ1blCU5QU21O44Opyq5oP3eTdMwo=',
//       intro: 'Average',
//       color: 'pink',
//       tag: 'High'
//     },
//   ]

//   return (
//     <div>
//       <Section1 users ={users}/>
//       <Section2 />
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {

//   function inputChanging(val){
//     console.log(val);
//   }


//   return (
//     <div>
//       <input onChange={function(elem){
//         inputChanging(elem.target.value)
//       }} 
//       type="text" placeholder='Enter Name' />
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {

//   function addNumbers(){
//     let a = document.getElementById('num1').value;
//     let b = document.getElementById('num2').value;
//     console.log(Number(a)+Number(b));
    

//   }

//   return (
//     <div>
//       <input id='num1' type="text" placeholder='Enter first number'/>    
//       <input id='num2' type="text" placeholder='Enter second number'/>
//       <button onClick={addNumbers}>Add </button>
//       </div>
//   )
// }

// export default App


//useState example
// 


//usestate example 2
// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0);

//   function increaseNum(){
//     console.log('increasing');
//     setNum(num + 1)
//   }

//   function decreaseNum(){
//     console.log('decreasing');
//     setNum(num - 1)
//   }

//   function jump5Num(){
//   console.log('increasing by 5');
//     setNum(num + 5)
//   }

//   return (
//     <div>
//       <h1 >{num}</h1>
//       <button onClick={increaseNum}>increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//       <button onClick={jump5Num}>Increase by 5</button>

//     </div>
//   )
// }

// export default App


//useState example 3
// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(21);
//   const btnClicked = () => {
//     setNum(prev =>(prev+1))


//   }


//   return (
//     <div>
//       <h1>{num}</h1> 
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App


      //two way binding example

// import React, { useState } from 'react'

// const App = () => {

//   const [title, setTitle] =useState('')
//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log('form submitted by ', title);

//     setTitle('')
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input type="text" 
//         placeholder='Enter Name' 
//         value={title}
//         onChange={(e)=>{
//           setTitle(e.target.value);
//         }}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



import { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

const submitHandler = (e) => {
  e.preventDefault()
  // console.log(title);
  // console.log(details);

  const copyTask =[...task];

copyTask.push({title, details})

// console.log(task)

  setTask(copyTask) 
  setTitle('')
  setDetails('')
}


const deleteNote= (idx)=>{
  const copyTask = [...task];
  copyTask.splice(idx,1);
  setTask(copyTask);
}

  return (
    <div className='min-h-screen lg:flex bg-black text-white  '>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>
    <h1 className='text-4xl font-bold'>Add Notes</h1>

{/* first input for heading */}
        <input type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 py-2 border-2 w-full rounded outline-none font-medium'
        value={title}
        onChange={(e)=>{
        setTitle(e.target.value);
        }}
        />

{/* Detailed wala input */}
      <textarea type="text" 
      className='px-5 h-32 py-2 w-full flex items-start flex-row border-2 rounded outline-none font-medium' 
      placeholder='Write Detail here'
      value={details}
      onChange={(e)=>{
      setDetails(e.target.value)
      }}
      />

      <button className='bg-white text-black font-medium px-5 py-2 rounded outline-none active:scale-95'>
        Add Notes
      </button>
  
    
      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex items-start justify-start flex-wrap gap-5 mt-6 overflow-auto h-full'>
      
      {task.map(function(elem,idx){
        return   <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded text-black bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] pt-9 pl-9 pb-4 px-4'>
          
          <div>
        <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
        <p className='mt-3 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
        </div>
        <button onClick={()=>{
          deleteNote(idx)
        }} className='w-full bg-red-500 text-white py-1 text-xs cursor-pointer active:scale-95 rounded font-bold'>Delete </button>
        </div>
      })}
      
        
      </div>
      </div>
    </div>
  )
}

export default App
