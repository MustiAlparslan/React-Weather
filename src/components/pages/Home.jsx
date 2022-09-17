import React from 'react'
import Form from '../Form'
import NavBar from '../NavBar'
import Weather from './Weather'

function Home() {
  const getCity = localStorage.getItem('city')
  
  return (
    <div className="h-screen flex flex-col">
        <NavBar/>
        <div className="w-full flex  justify-center flex-1 items-center">
          <Form/>
        </div>
        {getCity ?
        (
          <Weather/>  
        )
        :
          (<></>)
        }
    </div>
  )
}

export default Home