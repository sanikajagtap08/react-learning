import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  console.log();
  
  return (
    <div className='h-screen w-full '>
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  )
}

export default Section1




// App.jsx file for above component

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
