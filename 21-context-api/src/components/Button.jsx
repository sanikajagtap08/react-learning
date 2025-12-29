import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Button = () => {

const [theme, setTheme] = useContext(ThemeDataContext)

  const changeTheme = ()=>{
 setTheme('dark')
  }
  return (
    <div>
      <Button onclick={changeTheme}>Change Theme</Button>
    </div>
  )
}

export default Button
