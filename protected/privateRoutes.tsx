import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {useUser} from "@/src/user"
import Link from "next/link"
import Room from '../pages/room'



const PrivateRoutes  = ({children}: any) => {
  const {loading, user} = useUser()
  const router = useRouter()
  
  useEffect(() => 
  if (loading) {
    return <p>Loading...</p>
  }
  
   return <Room />
  
}


export default PrivateRoutes






// function PrivateRoutes<T>(Component: React.ComponentType<T>) {
//     return (props: T) => {

//   const {loading, user} = useUser()
//   const router = useRouter()
  
  
//   useEffect(() => {
//     if (!loading && !user){
//       router.push("/loginz")
//     }
//   }, [loading, user ,router])

//   if (loading) {
//     return <p>Loading...</p>
//   }
  
//    return (

//      <Component {...props!} />
//    )
          
//     }
  
// }
// export default PrivateRoutes;






 

