import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login description'
}

import RedirectButton from "@/components/ui/RedirectButton"

/**
 * 
 * Được hiểu ngầm định là Server component
 */
const LoginPage = () => {
 
  return (
    <div>
        <h1>Login Pages</h1>
        <RedirectButton label="Go To Home" />
    </div>
  )
}

export default LoginPage


