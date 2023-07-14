import { useRouter } from 'next/router'
import { useAuth } from '@/utils/AuthContext'
import { useEffect } from 'react'
import {useUser} from "@/src/user"
import Link from "next/link"
import Room from './room'

const PrivateRoutes  = ({children}: any) => {
  const {loading, user} = useUser()
  const router = useRouter()
  
  useEffect(() => {
    if (!loading && !user){
      router.push("/loginz")
    }
  }, [loading, user ,router])
  if (loading) {
    return <p>Loading...</p>
  }
  return <Link href = "/room" />
 
}

export default PrivateRoutes




 

















// import { useRouter } from 'next/router';
// import { useAuth } from '../utils/AuthContext';
// import Room from '@/pages/room';
// import Link from 'next/link';
// import { useEffect } from 'react';
// const PrivateRoutes = () => {
//   const router = useRouter();
//   const user = true;
//    useEffect(() => {
//   if (!user) {
//     // Redirect to the login page if user is not authenticated
//     <Link href = "/login"/>
//     // router.push('/login');
//     // Return null to prevent rendering the component temporarily
//   }
// }, [user])

//   return <Link href = "/room"/>
//   // return <Link  href = "/room"/>;
// };

// export default PrivateRoutes;


