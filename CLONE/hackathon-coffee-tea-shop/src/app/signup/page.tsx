import React from 'react'
import SignUpCard from '../components/SignUpCard'
import error404 from '../components/error404'
import Error404 from '../components/error404'
import TopCard from '../components/TopCard'

const page = () => {
  return (
    <div>
         <TopCard title="Login Page not 404 error " />
        <SignUpCard/>
    </div>
  )
}

export default page