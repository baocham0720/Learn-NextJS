import {Metadata} from 'next'
export const metadata: Metadata = {
  title: 'Login',
  description: 'Login description'
}

//import RedirectButton from "@/components/ui/RedirectButton"

import LoginForm from "@/components/ui/LoginForm"
import { getCsrfToken } from "next-auth/react"
/**
 * Tính năng NextAuth liên quan đến các file
 * app/layout.tsx
 * app/login/page.tsx
 * app/api/auth/[...nextauth]/route.tsx
 * app/customers/layout.tsx
 * ---------------------
 * Follow login
 * LoginForm --> SignIn --> app/api/auth/[...nextauth]/route.tsx --> goi ham authorize() 
 * --> login thanh cong thi return user
 * --> luu thong tin user vao session
 */
const LoginPage = async () => {
  const csrfToken = await getCsrfToken()
  return (
    <div>
         <LoginForm csrfToken={csrfToken} />
        {/*<RedirectButton label="Go To Home" />*/}
    </div>
  )
}

export default LoginPage


//"email": "john@mail.com",
//"password": "changeme",
//theo fakeapi
