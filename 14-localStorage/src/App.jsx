import React from 'react'

const App = () => {


      //LOCALSTORAGE PRACTICE

const user = {
  username : 'Sanika',
  age: 21,
  city: 'Nagpur'
}

console.log(user);
localStorage.setItem('user',JSON.stringify(user))
const usera= JSON.parse(localStorage.getItem('user'))
console.log(usera);

  return (
    <div>
      App
    </div>
  )
}

export default App
