
"use-client"
import React, { useEffect, useState } from 'react'

function Navbar() {

    const [theme, setTheme] = useState<string>('light')

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else {
            document.documentElement.classList.remove('dark')
        }

    },[theme])


    // function themehandler(): void{
        
    // }



  return (
    <div className='h-96 w-full bg-blue-500 dark:bg-yellow-500'>
        
 <button
 onClick={()=> setTheme((prev)=> prev === 'dark'? 'light': 'dark')}
 >toggle</button>

<div>{theme}</div>

    </div>
  )
}

export default Navbar